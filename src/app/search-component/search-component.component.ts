import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  public Array=[
    {id:0,name:"Bharath",email:"Bharath@gmail.com"},
    {id:1,name:"Pawan",email:"Pawan@gmail.com"},
    {id:2,name:"Bharath2",email:"Ram@gmail.com"},
    {id:3,name:"Harish",email:"Harish@gmail.com"},
    {id:4,name:"Sravani",email:"Sravani@gmail.com"},
  ]
  
  public searchArray:any=[]
  
  public imageArray:any=[]
  public searchName: string = ""
  public name : string=""
  public imageSrc:string=""
  public DetailsArray:any=[]

  public imageFile:string=""
  uploadForm= new FormGroup({
    file: new FormControl("",[Validators.required]),
    imgSrc: new FormControl("")
  })
  constructor() { }

  ngOnInit(): void {
    this.searchArray=this.Array
  }
  onKeyPressEvent(event:any){
    this.searchName=event.target.value;
    this.searchArray=[]
    this.Array.forEach((item:any)=>{
      const index = this.searchArray.findIndex((i:any)=>i.name===item.name)
      if(item.name.toLowerCase().indexOf(this.searchName.toLowerCase())>=0)
      {
        if(index === -1){
          this.searchArray.push(item)
        }
      }
      else
      {
        if(index >= 0){
        this.searchArray.splice(index,1)
        }
      }
      if(this.searchName==="")
      {
        this.searchArray = []
        this.searchArray = [...this.Array]
      }
    })
  }
  onclick(e:any){
    console.log(e)
    this.Array.map((item:any)=>{
      if(item.name === e)
      {
        this.DetailsArray = item
      }
    })
    console.log(this.DetailsArray)
  }
  onImageChange(event:any){
    const reader = new FileReader();
    if(event.target.files && event.target.files.length){
      const [file] = event.target.files
      reader.readAsDataURL(file)
      reader.onload=()=>{
        this.imageFile = reader.result as string;
        this.uploadForm.patchValue({
          imgSrc:reader.result
        })
      }
    }
  }
  onSubmit(){
    this.imageArray.push(this.uploadForm.value)
    this.imageArray.forEach((item:any)=>{
      this.imageSrc=item.imgSrc
    })
    console.log(this.imageSrc)
  }
}
