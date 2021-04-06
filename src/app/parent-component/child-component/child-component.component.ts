import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  public id:Number =0;
  public UserDetails: any=[]
  public userIndividualArray:any =[]
  constructor(private ActivatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    var id = this.ActivatedRoute.snapshot.paramMap.get("id")
    this.UserDetails=JSON.parse(localStorage.getItem("UserArray")|| '{}');
    console.log(id,this.UserDetails)
    this.UserDetails.forEach((item:any)=>{
      
      if(item.id==id)
      {
        console.log(item.id,id)
        this.userIndividualArray.push(item)
      }
    })
    console.log("details",this.userIndividualArray)
  }
}
