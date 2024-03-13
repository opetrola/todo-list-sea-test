import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

export const onSignUp = (
  email: string,
  username: string,
  password: string,
  confirmPassword: string,
  callback: () => void,
  handleError: (error: string) => void,
) => {
  // Check passwords is equal
  if (password !== confirmPassword) {
    handleError('auth/password-different')
    return
  }

  // Authenticate
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      const uid = response.user.uid
      const payload = {
        uid,
        email,
        username,
      }

      const usersRef = firestore().collection('users')

      usersRef
        .doc(uid)
        .set(payload)
        .then(() => callback())
        .catch((error: any) => handleError(error.code))
    })
    .catch(error => handleError(error.code))
}

export const OnCheckLogged = (
  callback: (user: IUserData) => void,
  handleError: (error: string) => void,
) => {
  const usersRef = firestore().collection('users')

  auth().onAuthStateChanged(user => {
    if (user) {
      usersRef
        .doc(user.uid)
        .get()
        .then(document => {
          if (!document.exists) {
            handleError('auth/user-not-exists')
            return
          }

          const userData = document.data() as IUserData
          callback({ ...userData, error: '' })
        })
        .catch(error => handleError(error.code))
    } else {
      callback({ error: 'auth/no-authenticated' })
    }
  })
}

export const onSignIn = (
  email: string,
  password: string,
  callback: (user: IUserData) => void,
  handleError: (error: string) => void,
) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => {
      const uid = response.user.uid
      callback({ uid, error: '' })
    })
    .catch(error => handleError(error.code))
}

export const onSignOut = (
  callback: () => void,
  handleError: (error: string) => void,
) => {
  auth()
    .signOut()
    .then(() => callback())
    .catch(error => handleError(error.code))
}
