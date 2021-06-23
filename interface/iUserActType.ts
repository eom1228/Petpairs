// 1. 액션타입 지정해주기

import { IUser } from './iUser';

export enum userActionTypes {
  LOG_IN_REQUEST = 'LOG_IN_REQUEST',
  LOG_IN_SUCCESS = 'LOG_IN_SUCCESS',
  LOG_IN_FAILURE = 'LOG_IN_FAILURE',

  LOG_OUT_REQUEST = 'LOG_OUT_REQUEST',
  LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS',
  LOG_OUT_FAILURE = 'LOG_OUT_FAILURE',

  SIGN_UP_REQUEST = 'SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE = 'SIGN_UP_FAILURE',
}

export interface signupData {
  name: string;
  email: string;
  password: string;
}

export interface logInData {
  email: string;
  password: string;
}
// 2. 액션 크리에이터의 인터페이스 만들어주기

export interface ISignUpRequest {
  type: userActionTypes.SIGN_UP_REQUEST;
  data: signupData;
}

export interface ISignUpSuccess {
  type: userActionTypes.SIGN_UP_SUCCESS;
}

export interface ISignUpFailure {
  type: userActionTypes.SIGN_UP_FAILURE;
  error: string;
}

export interface ILogInRequest {
  type: userActionTypes.LOG_IN_REQUEST;
  data: logInData;
}

export interface ILogInSuccess {
  type: userActionTypes.LOG_IN_SUCCESS;
  data: IUser;
}

export interface ILogInFailure {
  type: userActionTypes.LOG_IN_FAILURE;
  error: string;
}

export interface ILogOutRequest {
  type: userActionTypes.LOG_OUT_REQUEST;
}

export interface ILogOutSuccess {
  type: userActionTypes.LOG_OUT_SUCCESS;
}

export interface ILogOutFailure {
  type: userActionTypes.LOG_OUT_FAILURE;
  error: string;
}
// 리듀서에서 리턴 값으로 쓰기위해 인터페이스 내보내기

export type IUserActions = ILogInRequest | ILogInSuccess | ILogInFailure | ISignUpRequest | ISignUpSuccess | ISignUpFailure | ILogOutRequest | ILogOutSuccess | ILogOutFailure;