import firebase from 'firebase/app'
import 'firebase/auth'
import { User } from '../interfaces'
import { UserState } from '../interfaces/enums'

const firebaseConfig = {
  apiKey: 'AIzaSyBtL65KkcFxvZwYFFVrpYun0pkZLQQZjNA',
  authDomain: 'dev-test-872c3.firebaseapp.com',
  projectId: 'dev-test-872c3',
  storageBucket: 'dev-test-872c3.appspot.com',
  messagingSenderId: '793158827182',
  appId: '1:793158827182:web:272d374a54ffcf66e8413f',
  measurementId: 'G-XYPPW7KC1Z'
}
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const loginWithGithub = async (): Promise<User | null> => {
  try {
    const githubProvider = new firebase.auth.GithubAuthProvider()
    const resp = await firebase.auth().signInWithPopup(githubProvider)
    if (resp?.user) {
      const user: User = {
        id: resp.user.uid,
        name: resp.user.displayName ?? '',
        photo: resp.user.photoURL ?? '',
        status: UserState.Logged
      }
      return user
    }
    return null
  } catch (err) {
    return null
  }
}
