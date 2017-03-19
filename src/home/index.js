import yo from 'yo-yo';
import post from '../post'
import client from '../lib/client';

function home(data) {
  return yo`
    <div id="post-list" class="container">

      <div class="row">
        <form onsubmit=${handleSubmit} class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input id="form-title" type="text" name="title" class="validate">
              <label for="first_name">Title</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <textarea id="form-content" name="content" class="materialize-textarea"></textarea>
              <label for="icon_prefix2">Content</label>
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              <button type="submit" class="waves-effect waves-light btn">Add post</button>
            </div>
          </div>
        </form>
      </div>
      ${Object.keys(data).map((objectKey, index) => {
        const postData = data[objectKey];
        return post(postData)
      })}
    </div>
  `;
}

function handleSubmit() {
  const data = new FormData(this);
  const post = {
    title: data.get('title'),
    content: data.get('content'),
    userId: client.auth.currentUser.uid,
    userAvatar: client.auth.currentUser.photoURL,
  }
  client.savePost(post)
  return false;

}

export default home;
