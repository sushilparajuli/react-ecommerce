import { takeLatest, all, call, put} from 'redux-saga/effects';
import { getCurrentUser, createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase';
import { signInFailed, signInSucccess } from './user.action';
import { USER_ACTIONS_TYPE } from './user.types';


export function* getSnapshotFromAuthUser (userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth , userAuth, additionalDetails);
    console.log(userSnapshot, userSnapshot.data());
    yield put (signInSucccess({id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}


export function* isUserAuthenticated () {
  try {
    const userAuth = yield call(getCurrentUser);
    if(!userAuth) return;
    yield call(getSnapshotFromAuthUser,userAuth);

  } catch(error){
    yield put(signInFailed(error));
  }
}

export function* signInwithGoogle () {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromAuthUser,user);
  } catch(error){
    yield put(signInFailed(error));
  }
}

export function* signInwithEmailAndPassword({payload: {email, password}}) {
  try {
    const { user } = yield call(signInAuthUserWithEmailAndPassword,email,password);
    yield call(getSnapshotFromAuthUser,user);
  } catch(error) {
    yield put(signInFailed(error));
  }
  
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTIONS_TYPE.CHECK_USER_SESSION, isUserAuthenticated );
}

export function* onGoogleSignIn() {
  yield takeLatest(USER_ACTIONS_TYPE.GOOGLE_SIGN_IN_START, signInwithGoogle);
}

export function* onEmailSignIn() {
  yield takeLatest(USER_ACTIONS_TYPE.EMAIL_SIGN_IN_START, signInwithEmailAndPassword);
}

export  function* userSagas() {
  yield all([call(onCheckUserSession), call(onGoogleSignIn), call(onEmailSignIn, )]);
}