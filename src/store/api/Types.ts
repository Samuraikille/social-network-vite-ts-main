//? TYPES FOR AUTH API

export interface IGetUserByIdResponse {
  status: number;
  message: {
    mail: string;
    phone_number: string;
    user_id: number;
    name: string;
    reg_date: string;
    city: string;
  };
}

export interface IRegisterUserPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  user_city: string;
}
export interface IRegisterUserResponse {
  status: number;
  user_id: number;
}

export interface ILoginUserPayload {
  email: string;
  password: string;
}
export interface ILoginUserResponse extends IRegisterUserResponse {}

//? TYPES FOR POST API

export interface IGetPostByIdResponse {
  status: number;
  message: {
    main_text: string;
    user_id: number;
    id: number;
    reg_date: string;
    user_fk: {
      email: string;
      user_city: string;
      reg_date: string;
      name: string;
      id: number;
      phone_number: string;
      password: string;
    };
    photos: [];
    comments: [];
  };
}

export interface IPostPostResponse {
  status: 1;
  post_id: number;
}
export interface IPostPostPayload {
  user_id: number;
  main_text: string;
}
export interface IUpdatePostResponse {
  status: number;
  message: string;
}
export interface IUpdatePostPayload {
  post_id: number;
  new_text: string;
}

export interface IDeletePostResponse {
  status: number;
  message: string;
}

//? TYPES FOR PHOTOS API

export interface IGetPhotoByIdResponse {
  status: number;
  message: {
    status: number;
    message: [
      {
        post_id: null | number;
        photo_path: string;
        id: number;
        post_fk: null;
      }
    ];
  };
}

export interface IUpdatePhotoPayload {
  photo_id: number;
  photo_files: BinaryData;
}
export interface IUpdatePhotoResponse extends IDeletePostResponse {}

export interface IDeletePhotoResponse extends IDeletePostResponse {}
