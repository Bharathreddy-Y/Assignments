import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms';
import { localStorageArray, userModel, UserModuleModule } from '../Modules/user-module/user-module.module'
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router'

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  
  public userFormArray: Array<userModel> =  new Array<userModel>()
  public dataSource:any=[]
  public userlocalArray =[]
  public countryArray=[{name:"India"},{name:"U.S.A"},{name:"Australia"}]

  public DummyArray:any=[]
  public imageArray:any=[]
  public imageSrc:string=""
  public imageFile:string=""

  dummy:Array<userModel> =  new Array<userModel>()

  userForm = new FormGroup({
    id: new FormControl(0,[Validators.required]),
    name: new FormControl("",[Validators.required,Validators.maxLength(10)]),
    email: new FormControl("",[Validators.required,Validators.email]),
    dob: new FormControl("",[Validators.required]),
    country : new FormControl("",[Validators.required]),
    file: new FormControl("",[Validators.required]),
    imgSrc: new FormControl("")
  })
  public userHeaderColumns:string[]=[
    'id',
    'imgSrc',
    'name',
    'email',
    'dob',
    'country',
    'action'
  ]
  public data:any
  constructor( private route : Router) { 
    this.userFormArray = this.userFormArray || [];
    
  }

  ngOnInit(): void {
    
    this.getArrayFromLocal()
  }
  onImageChange(event:any){
    const reader = new FileReader();
    if(event.target.files && event.target.files.length){
      const [file] = event.target.files
      reader.readAsDataURL(file)
      reader.onload=()=>{
        this.imageFile = reader.result as string;
        this.userForm.patchValue({
          imgSrc:reader.result
        })
      }
    }
  }
  onSelect(array:any){
    this.route.navigate(["Home/",array.id])
    console.log("route",array)
  }
  submitForm(){
    let tempUserModelArray : userModel = new userModel()
    tempUserModelArray.id = this.userForm.value.id;
    tempUserModelArray.name=this.userForm.value.name;
    tempUserModelArray.email = this.userForm.value.email;
    tempUserModelArray.dob = this.userForm.value.dob;
    tempUserModelArray.file = this.userForm.value.file;
    tempUserModelArray.imgSrc = this.userForm.value.imgSrc;
    tempUserModelArray.country = this.userForm.value.country;
    console.log(tempUserModelArray)
    // debugger;
    // this.dummy = [];
    // this.dummy.push(tempUserModelArray)
    // console.log(this.dummy)
    this.userFormArray.push(tempUserModelArray);
    this.userFormArray.forEach((item:any)=>{
      this.imageSrc=item.imgSrc;
    })
    localStorage.setItem("UserArray",JSON.stringify(this.userFormArray));
    this.getArrayFromLocal();
    this.userForm.reset()
  }
  getArrayFromLocal(){
    var userlocalArray = JSON.parse(localStorage.getItem("UserArray")|| '{}');
    this.userFormArray = userlocalArray
    this.dataSource = new MatTableDataSource(this.userFormArray);
    console.log("json",this.userFormArray)
  }
  deleteUser(id:any){
    const index =this.userFormArray.findIndex((t:any)=>t.id==id)
    console.log(index)
    if (index !== -1) {
      this.userFormArray.splice(index, 1);
      console.log(this.userFormArray);
    }
    localStorage.setItem("UserArray",JSON.stringify(this.userFormArray))
    this.getArrayFromLocal()
  }
  showEditForm(id:any){
    console.log("filtter", this.userFormArray)
    this.userFormArray.forEach((item:any)=>{
      if(item.id === id){
        this.DummyArray = item
        console.log("filter id", this.DummyArray)
        this.userForm.controls.id.setValue(this.DummyArray.id)
        this.userForm.controls.name.setValue(this.DummyArray.name)
        this.userForm.controls.email.setValue(this.DummyArray.email)
        this.userForm.controls.dob.setValue(this.DummyArray.dob)
        // this.userForm.controls.file.setValue(this.DummyArray.file)
        // this.userForm.controls.imgSrc.setValue(this.DummyArray.imgSrc)
        this.userForm.controls.country.setValue(this.DummyArray.country)
      }
    })
    this.deleteUser(id)
  }
}

