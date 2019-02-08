import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ProjectComponent } from './components/project/project.component';
import { UpdateEmpComponent } from './components/update-emp/update-emp.component';
import { UpdateProjectComponent } from './components/update-project/update-project.component';

const routes: Routes = [
  {path: '', component: ProjectComponent, },
  {path: 'admin', component: AdminComponent },
  {path: 'addProject', component: AddProjectComponent },
  {path: 'employee', component: EmployeeComponent },
  {path: 'addemployee', component: AddEmployeeComponent },
  {path: 'updateemployee', component: UpdateEmpComponent },
  {path: 'updateproject', component: UpdateProjectComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
