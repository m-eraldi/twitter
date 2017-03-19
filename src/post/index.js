import yo from 'yo-yo';
import client from '../lib/client'

function post(data) {
  let commentsData = {}
  data.comments ? commentsData = data.comments : commentsData = {};
  return yo`<div class="row">
    <div class="col s12">
      <div class="card">
        <div class="card-content">
          <img height="50" width="50" src=${data.userAvatar} alt="" class="circle">
          <span class="card-title">${data.title}</span>
          <p>${data.content}</p>
        </div>
        <ul class="collection">
          ${Object.keys(commentsData).map((objKey, index) => {
            const commentData = commentsData[objKey];
            return yo`
              <li class="collection-item avatar">
                <img src=${commentData.userAvatar} alt="" class="circle">
                <span class="title">${commentData.comment}</span>
                 <!-- <a href="#!" class="secondary-content"><i class="material-icons">close</i></a> -->
              </li>
            `
          })}

        </ul>
        <div class="row">
          <form onsubmit=${addComent} class="col s10 push-s1">
            <div class="row">
              <div class="input-field col s12">
                <input id="comment" name="comment" type="text" class="validate">
                <input type="hidden" name="postId" value=${data.postId}>
                <label for="comment">Comment Here...</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>`;
}

function addComent() {
  const data = new FormData(this);
  const postId = data.get('postId');
  const comment = data.get('comment')
  console.log(postId);
  console.log(comment);
  client.addComment(postId, comment, client.auth.currentUser.photoURL)
  return false;
}

export default post;
