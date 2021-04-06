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
  public votersArray=[
    {id:0,name:"Bharath",age:26,isVote:false,votecount:0},
    {id:1,name:"Arun",age:18,isVote:false,votecount:0},
    {id:2,name:"Pawan",age:23,isVote:false,votecount:0},
    {id:3,name:"Ram",age:22,isVote:false,votecount:0},
    {id:4,name:"Harish",age:26,isVote:false,votecount:0},
    {id:5,name:"Sravani",age:15,isVote:false,votecount:0},
  ]
  public voterAge:number=0
  public selectedVoter:string=""
  public message:string=""
  public votermessage:string=""
  public showMessage:boolean=false
  public showBallotBox:boolean=false
  public showVoters:boolean=true
  public voterExistMessage:boolean=false
  public totalVotes:number=0
  public isVoted:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  onClickToSelectVoter(event:any){
    // console.log(event)
    this.votersArray.forEach((voter:any)=>{
      if(voter.name === event)
      {
        if(voter.age > 18)
        {
          console.log(voter.votecount)
          voter.votecount += 1
          if(voter.votecount<=1)
          {
            this.showVoters=false
            this.showBallotBox=true
            this.voterExistMessage=false
            this.showMessage=false
          }
          else{
            this.showVoters=true
            this.showBallotBox=false
            voter.isVote = false
            this.isVoted = voter.isVote
            this.voterExistMessage=true
            this.showMessage=false
            this.votermessage = " You Have already Resigtered Your Vote"
          }
        }
        else{
          this.showMessage=true
          this.showBallotBox=false
          this.voterExistMessage=false
          this.showVoters = true
          this.isVoted=voter.isVote
          this.message="You are not Eligible to Vote."
        }
      }
    })
  }
  onClickToVote(id:any){
    this.totalVotes+=1
    this.candidateArray.forEach((item:any)=>
    {
      if(item.id === id)
      {
        this.showBallotBox=false
        this.showVoters=true
        item.count += 1
      }
    })
    // console.log("Total votes "+this.totalVotes)
  }
}
