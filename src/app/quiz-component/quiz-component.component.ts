import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-component',
  templateUrl: './quiz-component.component.html',
  styleUrls: ['./quiz-component.component.css']
})
export class QuizComponentComponent implements OnInit {

  public QuizArray=[
    {
      id:1,
      question: 
      {
        Q:"which is the command from bellow that create's a component ?",
        options:{
          A:"ng g c nameofcomp",
          B:"ng g m nameofcomp",
          C:"ng g s nameofcomp",
          D:"None of the Above"
        }
      },
      Answer:"ng g c nameofcomp"
    },
    {
      id:2,
      question: 
      {
        Q:"In Angular, you can pass data from parent component to child component using...",
        options:{
          A:"@Output()",
          B:"@Input()",
          C:"Input",
          D:"Output"
        }
      },
      Answer:"@Input()"
    },
    {
      id:3,
      question: 
      {
        Q:"In Angular, you can pass data from child component to parent component using",
        options:{
          A:"@Output()",
          B:"@Input()",
          C:"Input",
          D:"Output"
        }
      },
      Answer:"@Output()"
    },
    {
      id:4,
      question: 
      {
        Q:"You can create local HTML reference of HTML tag using variable which starts with character",
        options:{
          A:"@",
          B:"#",
          C:"*",
          D:"&"
        }
      },
      Answer:"#"
    },
    {
      id:5,
      question: 
      {
        Q:"In routing, below tag is used to show selected route component dynamically",
        options:{
          A:"<router></router>",
          B:"<router-output></router-output>",
          C:"<router-outlet></router-outlet>",
          D:"<router-input></router-input>"
        }
      },
      Answer:"<router-outlet></router-outlet>"
    },
    {
      id:6,
      question: 
      {
        Q:"We need to call below method of RouterModule for providing all routes in AppModule",
        options:{
          A:"RouterModule.forChild",
          B:"RouterModule.forRoot",
          C:"RouterModule.forRo",
          D:"RouterModule.all"
        }
      },
      Answer:"RouterModule.forRoot"
    },
  ]
  public singleQuizArray:any=[]
  public index:number=0
  public score:number=0 
  public answer:string=""
  public checked:string=""
  public showScore=false;
  public showQuiz=true;
  public disablebtn = false
  public seconds:number=0;
  public minutes:number=0;
  public showLength=true
  public showClock=true
  public interval: any;
  public onClickChangeBackColorA=false
  public onClickChangeBackColorB=false
  public onClickChangeBackColorC=false
  public onClickChangeBackColorD=false
  public onTimeOut = false
  public onClickBtnChangeBackColor = false
  public subMinutes:number=0
  public subSeconds:number=0
  public totalMinutes:number=0
  public totalSeconds:number=0
  public showTotalTime=false
  constructor() { }

  ngOnInit(): void {
    this.singleQuizArray=[(this.QuizArray[this.index])]
    this.secondsClock()
  }
  secondsClock(){
      this.interval=setInterval(() =>{
        if(this.seconds === 0 && this.seconds<60)
        {
          this.seconds ++;
        }
        else{this.seconds ++;}
        if(this.seconds === 60){ 
          this.seconds = 0
          this.minutes ++
        }
        if(this.minutes === 1 && this.seconds>55)
        {
          this.onTimeOut = true
        }
        if(this.minutes === 2)
        {
          this.timeOver()
          setTimeout(()=>{
            this.minutes = 0},1000)
        }
      }, 1000);
  }
  timeOver()
  {
    this.onSubmit()
  }
  onChecked(Q:any,A:any,a:any){
    this.disablebtn = true
    if(a==="A"){
      this.onClickChangeBackColorA = true
      this.onClickChangeBackColorB = false
      this.onClickChangeBackColorC = false
      this.onClickChangeBackColorD = false
    }
    if(a==="B"){
      this.onClickChangeBackColorA = false
      this.onClickChangeBackColorB = true
      this.onClickChangeBackColorC = false
      this.onClickChangeBackColorD = false
    }
    if(a==="C"){
      this.onClickChangeBackColorA = false
      this.onClickChangeBackColorB = false
      this.onClickChangeBackColorC = true
      this.onClickChangeBackColorD = false
    }
    if(a==="D"){
      this.onClickChangeBackColorA = false
      this.onClickChangeBackColorB = false
      this.onClickChangeBackColorC = false
      this.onClickChangeBackColorD = true
    }
    this.onClickBtnChangeBackColor = true
    this.QuizArray.forEach((item:any)=>{
      if(item.question.Q === Q)
      {
        if(item.Answer === A){
          this.answer = A
        }
      }
    })
  }
  onSubmit(){
    this.subMinutes += this.minutes
    this.subSeconds += this.seconds 
    console.log("sM",this.subMinutes,"sS",this.subSeconds)
    setTimeout(()=>{this.seconds = 0;
      this.minutes = 0;},100)
    
    this.disablebtn=false
    this.onClickBtnChangeBackColor = false
    this.onClickChangeBackColorA = false
    this.onClickChangeBackColorB = false
    this.onClickChangeBackColorC = false
    this.onClickChangeBackColorD = false
    if(this.index < this.QuizArray.length)
    {
      this.index += 1
    }
    this.singleQuizArray=[(this.QuizArray[this.index])]
    if(this.answer!=="")
    {
      this.score += 1;
    }
    
    if(this.index === this.QuizArray.length)
    {
      console.log(this.subMinutes,this.subSeconds)
      if(this.subSeconds>60){
      let convert = parseFloat((this.subSeconds/60).toFixed(1));
      let min = convert.toString().split('.')[0];
      let sec = convert.toString().split('.')[1];
      this.totalMinutes = this.subMinutes + parseFloat(min);
      this.totalSeconds = parseFloat(sec)
      }
      else{
        this.totalSeconds = this.subSeconds
        this.totalMinutes = this.subMinutes
      }
      console.log(this.totalMinutes,this.totalSeconds)
      this.showScore=true;
      this.showQuiz=false;
      this.showLength = false;
      this.showClock = false;
      this.showTotalTime=true
      clearInterval(this.interval)
    }
    this.answer=""
    this.onTimeOut = false
  }

}
