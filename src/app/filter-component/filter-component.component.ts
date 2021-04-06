import { AfterViewInit, Component, ElementRef, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.css']
})
export class FilterComponentComponent implements AfterViewInit {

  @ViewChild('element') elementRef:ElementRef | undefined;

  public userArray=[
    {id:0,name:"Bharath",email:"bharath@gmail.com",course:"React js"},
    {id:1,name:"Pawan",email:"Pawan@gmail.com",course:"React js"},
    {id:2,name:"Ram",email:"Ram@gmail.com",course:"Vue js"},
    {id:3,name:"Harish",email:"Harish@gmail.com",course:"Angular"},
    {id:4,name:"Sravani",email:"Sravani@gmail.com",course:"Angular"},
    {id:5,name:"Arun",email:"Arun@gmail.com",course:"Java"},
  ]
  public courseArray=[{name:"All"},{name:"React js"},{name:"Vue js"},{name:"Angular"},{name:"Java"}]
  public selectedCourse="All";
  public change:any;
  public filteredArray:any=[]

  constructor() { 
    this.filteredArray = this.userArray
   }

  ngAfterViewInit(){
    console.log(this.elementRef?.nativeElement.offsetHeight+"px")
  }
  onSelectModelChange(course:any){
    console.log("Course name",course)
    if(course==="All"){
      this.filteredArray=this.userArray
    }
    else{
    this.filteredArray = this.userArray.filter((item:any)=>item.course===course)
    console.log("Filtered Array",this.filteredArray)
    }
  }

}
