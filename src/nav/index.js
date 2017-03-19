import yo from 'yo-yo';
import page from 'page';
import client from '../lib/client'

function nav(user) {
  return yo`<nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Twitter Clone</a>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="/signin">Sign in</a></li>
        <div class="chip">
          <img src=${user ? user.photoURL: ""} alt="">
          ${user ? user.displayName : 'Welcome'}
          <i class="close material-icons" onclick=${() => logout()}>close</i>
        </div>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <li><a href="/">Home</a></li>
        <li><a href="/signin">Sign in</a></li>
        <li><a onclick=${() => logout()}>Logout</a></li>
      </ul>
    </div>
  </nav>
  `;
}

function logout() {
  client.logout()
  page('/signin');
}

export default nav;
