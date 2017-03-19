import firebase, { auth, database } from './firebase';

class Client {
  constructor() {
    this.auth = auth
    this.database = database
  }

  async savePost(post) {
    const postId = this.database.ref().child('posts').push().key;
    const postRef = this.database.ref(`/posts/${postId}`);
    postRef.set({
      postId: postId,
      title: post.title,
      content: post.content,
      coments: [],
      userId: post.userId,
      userAvatar: post.userAvatar,
    });
    return Promise.resolve(postRef);
  }

  async listPosts(callback) {
    const postRef = this.database.ref('posts');
    postRef.on('value', function(data) {
      callback(data.val())
    });
  }

  async addComment(id, comment, userAvatar) {
    const postCommentId = this.database.ref().child('posts').push().key;
    const postCommentRef = this.database.ref(`posts/${id}/comments/${postCommentId}`);
    postCommentRef.set({
      id,
      comment,
      userAvatar,
    })
  }

  async authenticate() {
    try {
      const provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('public_profile');
      const result = await this.auth.signInWithPopup(provider)
      const user = result.user;
      return Promise.resolve(user);
    } catch (e) {
      return Promise.resolve({ code: e.code, message: e.message });
    }
  }

  async logout() {
    try {
      await this.auth.signOut();
      return Promise.resolve({ message: 'Logout...' })
    } catch (e) {
      return Promise.resolve(e)
    }
  }

}

const client = new Client()

export default client;





// {
//   title,
//   content,
//   comments {
//     content,
//     user {
//       userId,
//       userName
//       photoUrl
//     }
//   },
//   userId,
// }
