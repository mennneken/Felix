import firebase from 'firebase/app';
import 'firebase/firestore';

// firebase init goes here
const config = {
  apiKey: "AIzaSyAzY8LlBHnFPWa3zev4rikKOUz5IRw8JM4",
  authDomain: "felix-7de64.firebaseapp.com",
  databaseURL: "https://felix-7de64.firebaseio.com",
  projectId: "felix-7de64",
  storageBucket: "felix-7de64.appspot.com",
  messagingSenderId: "365007969810"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
  db,
  auth,
  currentUser,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}