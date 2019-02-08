import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { LoginService } from './services/login.service';
import { from } from 'rxjs';

import { ProjectComponent } from './components/project/project.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { filter } from 'rxjs/operators';
import { UpdateEmpComponent } from './components/update-emp/update-emp.component';
import { UpdateProjectComponent } from './components/update-project/update-project.component';







@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    EmployeeComponent,
    AdminComponent,
    AddProjectComponent,
    AddEmployeeComponent,
    UpdateEmpComponent,
    UpdateProjectComponent,
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
