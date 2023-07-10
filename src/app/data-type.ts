 export interface User{
  username: string ;
  email: string ;
  full_name: string;
  phone: string ;
  address: string ;
  gender: string ;
  birthday: string ;
  password: string ;
  password_confirmation: string ;
}
export interface signUp {
  name: string;
  email: string;
  password: string;
}
export interface login {
  email: String;
  password: String;
}
export interface product{
  name:string,
  price:number,
  category:string,
  color:string,
  image:string,
  description:string,
  id:number,
  quantity:undefined | number,
  productId:undefined|number,
  rating:any;
}
export interface cart{
  name:string,
  price:number,
  category:string,
  color:string,
  image:string,
  description:string,
  id:number| undefined,
  quantity:undefined | number,
  productId:number,
  userId:number
}
