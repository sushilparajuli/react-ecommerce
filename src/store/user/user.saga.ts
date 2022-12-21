import { User } from 'firebase/auth';
import { takeLatest, all, call, put} from 'typed-redux-saga/macro';
import { getCurrentUser, 
  createUserDocumentFromAuth, 
  signInWithGooglePopup, 
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword, 
  signOutUser,
  AdditionalInformation } from '../../utils/firebase';
import { 
  EmailSignInStart, 
  SignUpStart,
  signInFailed, 
  signInSuccess, 
  signOutSuccess, 
  signUpFailed, 
  signUpSuccess, 
  SignUpSuccess
} from './user.action';
import { USER_ACTIONS_TYPE } from './user.types';

export function* getSnapshotFromAuthUser (userAuth: User, additionalDetails?: AdditionalInformation) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth , 
      userAuth, 
      additionalDetails);

    if(userSnapshot) {
      yield* put (signInSuccess({id: userSnapshot.id, ...userSnapshot.data() }));
    }
    

  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}


export function* isUserAuthenticated () {
  try {
    const userAuth = yield* call(getCurrentUser);
    if(!userAuth) return;
    yield* call(getSnapshotFromAuthUser, userAuth);
  } catch(error){
    yield* put(signInFailed(error as Error));
  }
}

export function* signInwithGoogle () {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromAuthUser,user);
  } catch(error){
    yield* put(signInFailed(error as Error));
  }
}

export function* signInwithEmailAndPassword({payload: {email , password}}: EmailSignInStart) {
  try {

    const userCredential = yield* call(signInAuthUserWithEmailAndPassword,email,password);
    if(userCredential) {
      const {user} = userCredential;
      yield* call(getSnapshotFromAuthUser,user);
    }
    
  } catch(error) {
    yield* put(signInFailed(error as Error));
  }
  
}



export function* signUp({payload: {email, password, displayName}} : SignUpStart) {
  try {
    const userCredential = yield* call(createAuthUserWithEmailAndPassword, email, password);
    if(userCredential) {
      const {user} = userCredential;
      yield* put (signUpSuccess(user, {displayName}));
    }
  } catch(error) {
    yield* put(signUpFailed(error as Error));
  }
  
}

export function* signOut () {
  try {
    yield* call(signOutUser);
    yield* put (signOutSuccess());
  } catch(error) {
    yield* put(signUpFailed(error as Error));
  }
}

export function* signInAfterSignUp({ payload: {user, additionalDetails}} : SignUpSuccess) {
  yield* call(getSnapshotFromAuthUser, user, additionalDetails);
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTIONS_TYPE.CHECK_USER_SESSION, isUserAuthenticated );
}

export function* onGoogleSignIn() {
  yield* takeLatest(USER_ACTIONS_TYPE.GOOGLE_SIGN_IN_START, signInwithGoogle);
}

export function* onEmailSignIn() {
  yield* takeLatest(USER_ACTIONS_TYPE.EMAIL_SIGN_IN_START, signInwithEmailAndPassword);
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTIONS_TYPE.SIGN_UP_START, signUp);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTIONS_TYPE.SIGN_OUT_START, signOut);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTIONS_TYPE.SIGN_UP_SUCCESS, signInAfterSignUp);
}


export  function* userSagas() {
  yield* all([
    call(onCheckUserSession), 
    call(onGoogleSignIn), 
    call(onEmailSignIn), 
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}