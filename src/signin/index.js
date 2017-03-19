import yo from 'yo-yo';
import client from '../lib/client';
import page from 'page';

async function authenticate() {
  await client.authenticate();
  page('/');
}

const signinForm = yo`
  <div id="signin-form" class="container">
    <div class="row">
      <div class="col s12">
        <h3 class="center-align">Sign in with Facebook</h3>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <button class="col s12 waves-effect waves-blue btn blue" onclick=${() => authenticate()}>Log in</button>
      </div>
    </div>
  </div>
`;

export default signinForm;
