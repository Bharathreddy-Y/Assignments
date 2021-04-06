import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponentComponent } from './filter-component/filter-component.component';
import { ChildComponentComponent } from './parent-component/child-component/child-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { PollVoteComponentComponent } from './poll-vote-component/poll-vote-component.component';
import { SearchComponentComponent } from './search-component/search-component.component';

const routes: Routes = [
  // {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:ParentComponentComponent},
  {path:"Home/:id",component:ChildComponentComponent},
  // {path:'',redirectTo:'Search',pathMatch:'full'},
  {path:'Search',component:SearchComponentComponent},
  // {path:'',redirectTo:'Filter',pathMatch:'full'},
  {path:'Filter',component:FilterComponentComponent},
  {path:'',redirectTo:'vote',pathMatch:'full'},
  {path:'vote',component:PollVoteComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
