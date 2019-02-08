import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { Employee } from 'src/app/login';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  public First
  public Last
  public Email
  public Projectid 
  public flag = true

  constructor(
              private EmployeeService: EmployeeService,
              private router : Router,
              private route: ActivatedRoute ,
              public fbobj: FormBuilder,             
              ) { }


  AddEmployee = new Employee("","","","",true);
  Form = this.fbobj.group(
    {
      First: ['', [Validators.required]],
      Last:  ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    }
  );

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.Projectid = params['id'];
       });
  }

  subEmployee(){
    this.AddEmployee = new Employee(this.First,this.Last,this.Email,this.Projectid,this.flag);
    this.EmployeeService.EmployeePost(this.AddEmployee)
      .subscribe((data1:any) => {
      if(data1.status == true){
        alert("submitted")
      }
      })
  }

  Back(){
    this.router.navigate(['/employee'],{queryParams: {id:this.Projectid}});

  }
}
