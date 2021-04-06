import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModuleModule {
  public userArray: Array<userModel> =  new Array<userModel>()
 }
 export class userModel{
  public id:Number=0
  public name:string=""
  public email: string=""
  public dob:string=""
  public file:any;
  public imgSrc:any;
  public country: string=""
 }
 export class localStorageArray{
   public userlocalArray: Array<any>=new Array<any>()
 }
