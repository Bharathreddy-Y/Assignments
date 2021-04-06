import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll-vote-component',
  templateUrl: './poll-vote-component.component.html',
  styleUrls: ['./poll-vote-component.component.css']
})
export class PollVoteComponentComponent implements OnInit {
  
  public candidateArray=[
    {id:0,name:"Jagan Anna",imgSrc:"/../../assets/Voters Images/fan.jfif",count:0},
    {id:1,name:"Chandra Babu Thatha",imgSrc:"/../../assets/Voters Images/cycle.jfif",count:0},
    {id:2,name:"K.A Paul Uncle",imgSrc:"/../../assets/Voters Images/helicopter.jfif",count:0}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onClickToVote(id:any){
    console.log("hi from",id)
    this.candidateArray.forEach((item:any)=>
    {
      if(item.id === id)
      {
        item.count += 1
      }
      console.log("i am "+item.name+" my count is "+item.count)
    })
  }
}
