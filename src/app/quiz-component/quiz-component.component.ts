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
  constructor() { }

  ngOnInit(): void {
    this.singleQuizArray=[(this.QuizArray[this.index])]
    console.log(this.singleQuizArray)
  }
  onChecked(Q:any,A:any){
    this.QuizArray.forEach((item:any)=>{
      if(item.question.Q === Q)
      {
        if(item.Answer === A){
          this.answer = A
          console.log(item.Answer)
        }
      }
    })
  }
  onSubmit(){
    this.index += 1
    this.singleQuizArray=[(this.QuizArray[this.index])]
    if(this.answer!=="")
    {
      this.score += 1;
      console.log(this.QuizArray.length)
    }if(this.index === this.QuizArray.length)
    {
      this.showScore=true;
      this.showQuiz=false;
    }
    this.answer=""
  }

}
