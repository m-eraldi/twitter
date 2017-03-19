import page from 'page';
import yo from 'yo-yo';
import empty from 'empty-element';
import client from './lib/client';
import home from './home'
import signinForm from './signin'
import nav from './nav'

const navContainer = document.getElementById('nav-container');
const appContainer = document.getElementById('App-container');

window.client = client;

function ensureAuth(ctx, next) {
  if (!client.auth.currentUser) {
    return page('/signin');
  }
  ctx.user = client.auth.currentUser;
  next();
}

page('/', ensureAuth, (ctx, next) => {
  client.listPosts(data => {
    data ? data = data : data = {}
    empty(navContainer).appendChild(nav(ctx.user))
    empty(appContainer).appendChild(home(data))
  })
})

page('/signin', (ctx, next) => {
  empty(navContainer).appendChild(nav(ctx.user))
  empty(appContainer).appendChild(signinForm)
})

page();
