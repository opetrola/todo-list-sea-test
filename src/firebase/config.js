import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA8jRWs2t6q3DHOTdzp-4oS6tl4y_92A-Y',
  authDomain: 'todo-list-test-sea.firebaseapp.com',
  projectId: 'todo-list-test-sea',
  storageBucket: 'todo-list-test-sea.appspot.com',
  messagingSenderId: '555454650786',
  appId: '1:555454650786:web:13977d9721e8f1491c7afb',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export { firebase }
