import { auth } from "../config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  signInWithCredential,
  FacebookAuthProvider,
  getAdditionalUserInfo,
  getAuth,
} from "firebase/auth";
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("We are authenticated now!");
  }
});


async function register(email, password) {
  await createUserWithEmailAndPassword(auth, email, password);
}

async function login(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
}
async  function logOut(){
  auth.signOut();
}
async function sendRequestOfChangingPassword(email) {
  console.log('begin the method sendRequestOfChangingPassword with email=', email);
  sendPasswordResetEmail(auth, email);
}

export { register, login,logOut , sendRequestOfChangingPassword };
