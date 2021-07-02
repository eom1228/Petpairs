// 1. 액션타입 지정해주기

import { IImgFile, IPet, IUser } from './iUser';

export enum userActionTypes {
	LOG_IN_REQUEST = 'LOG_IN_REQUEST',
	LOG_IN_SUCCESS = 'LOG_IN_SUCCESS',
	LOG_IN_FAILURE = 'LOG_IN_FAILURE',

	LOG_OUT_REQUEST = 'LOG_OUT_REQUEST',
	LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS',
	LOG_OUT_FAILURE = 'LOG_OUT_FAILURE',

	POST_LIKE_REQUEST = 'POST_LIKE_REQUEST',
	POST_LIKE_SUCCESS = 'POST_LIKE_SUCCESS',
	POST_LIKE_FAILURE = 'POST_LIKE_FAILURE',

	LOAD_MYPROFILE_REQUEST = 'LOAD_MYPROFILE_REQUEST',
	LOAD_MYPROFILE_SUCCESS = 'LOAD_MYPROFILE_SUCCESS',
	LOAD_MYPROFILE_FAILURE = 'LOAD_MYPROFILE_FAILURE',

	LOAD_CARDS_REQUEST = 'LOAD_CARDS_REQUEST',
	LOAD_CARDS_SUCCESS = 'LOAD_CARDS_SUCCESS',
	LOAD_CARDS_FAILURE = 'LOAD_CARDS_FAILURE',

	UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST',
	UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS',
	UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE',

	UPDATE_PETIMAGE_REQUEST = 'UPDATE_PETIMAGE_REQUEST',
	UPDATE_PETIMAGE_SUCCESS = 'UPDATE_PETIMAGE_SUCCESS',
	UPDATE_PETIMAGE_FAILURE = 'UPDATE_PETIMAGE_FAILURE',

	SIGN_UP_REQUEST = 'SIGN_UP_REQUEST',
	SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
	SIGN_UP_FAILURE = 'SIGN_UP_FAILURE',

	DELETE_USER_REQUEST = 'DELETE_USER_REQUEST',
	DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS',
	DELETE_USER_FAILURE = 'DELETE_USER_FAILURE',
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

export interface loadProfileData {
	id: number;
}
export interface updateProfileData {
	id: number;
	name?: string;
	email?: string;
	pet?: {
		petId?: null | number;
		petName?: null | string;
		breed?: null | string;
		age?: null | number;
		fileName?: null | IImgFile[];
		introduce?: null | string;
	};
}

export interface updatePetImageData {
	petId?: number;
	formData?: File[];
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

export interface IPostLikeRequest {
	type: userActionTypes.POST_LIKE_REQUEST;
	data: number;
}

export interface IPostLikeSuccess {
	type: userActionTypes.POST_LIKE_SUCCESS;
	data: number;
}

export interface IPostLikeFailure {
	type: userActionTypes.POST_LIKE_FAILURE;
	error: string;
}

// export interface ILoadProfileRequest {
// 	type: userActionTypes.LOAD_PROFILE_REQUEST;
// 	data: IUser['id'];
// }

// export interface ILoadProfileSuccess {
// 	type: userActionTypes.LOAD_PROFILE_SUCCESS;
// 	data: IUser;
// }

// export interface ILoadProfileFailure {
// 	type: userActionTypes.LOAD_PROFILE_FAILURE;
// 	error: string;
// }

export interface ILoadProfileRequest {
	type: userActionTypes.LOAD_MYPROFILE_REQUEST;
	data: loadProfileData;
}

export interface ILoadProfileSuccess {
	type: userActionTypes.LOAD_MYPROFILE_SUCCESS;
	data: IUser;
}

export interface ILoadProfileFailure {
	type: userActionTypes.LOAD_MYPROFILE_FAILURE;
	error: string;
}

export interface ILoadCardsRequest {
	type: userActionTypes.LOAD_CARDS_REQUEST;
	data: number;
}

export interface ILoadCardsSuccess {
	type: userActionTypes.LOAD_CARDS_SUCCESS;
	data: IPet[];
}

export interface ILoadCardsFailure {
	type: userActionTypes.LOAD_CARDS_FAILURE;
	error: string;
}

export interface IUpdateRequest {
	type: userActionTypes.UPDATE_PROFILE_REQUEST;
	data: updateProfileData;
}

export interface IUpdateSuccess {
	type: userActionTypes.UPDATE_PROFILE_SUCCESS;
	data: IUser;
}

export interface IUpdateFailure {
	type: userActionTypes.UPDATE_PROFILE_FAILURE;
	error: string;
}

export interface IUpdatePetImageRequest {
	type: userActionTypes.UPDATE_PETIMAGE_REQUEST;
	data: updatePetImageData;
}

export interface IUpdatePetImageSuccess {
	type: userActionTypes.UPDATE_PETIMAGE_SUCCESS;
	data: IImgFile[];
}

export interface IUpdatePetImageFailure {
	type: userActionTypes.UPDATE_PETIMAGE_FAILURE;
	error: string;
}

export interface ILogOutSuccess {
	type: userActionTypes.LOG_OUT_SUCCESS;
}

export interface ILogOutFailure {
	type: userActionTypes.LOG_OUT_FAILURE;
	error: string;
}

export interface IDeleteUserRequest {
	type: userActionTypes.DELETE_USER_REQUEST;
	data: number;
	// data: IUser['id'];
}

export interface IDeleteUserSuccess {
	type: userActionTypes.DELETE_USER_SUCCESS;
	data: string;
}

export interface IDeleteUserFailure {
	type: userActionTypes.DELETE_USER_FAILURE;
	error: string;
}
// 리듀서에서 리턴 값으로 쓰기위해 인터페이스 내보내기

export type IUserActions =
	| ILogInRequest
	| ILogInSuccess
	| ILogInFailure
	| ISignUpRequest
	| ISignUpSuccess
	| ISignUpFailure
	| ILogOutRequest
	| ILogOutSuccess
	| ILogOutFailure
	| ILoadProfileRequest
	| ILoadProfileSuccess
	| ILoadProfileFailure
	| ILoadCardsRequest
	| ILoadCardsSuccess
	| ILoadCardsFailure
	| IUpdateRequest
	| IUpdateSuccess
	| IUpdateFailure
	| IUpdatePetImageRequest
	| IUpdatePetImageSuccess
	| IUpdatePetImageFailure
	| IPostLikeRequest
	| IPostLikeSuccess
	| IPostLikeFailure
	| IDeleteUserRequest
	| IDeleteUserSuccess
	| IDeleteUserFailure;
