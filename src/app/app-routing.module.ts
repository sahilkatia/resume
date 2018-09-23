import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { AdminComponent } from './components/admin/admin.component';


const routes: Routes =[
    { path: '', redirectTo: '/admin', pathMatch: 'full' },
    {path: 'admin', component:AdminComponent},
  

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }
