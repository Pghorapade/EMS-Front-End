import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee, Update_Employee } from 'src/app/login';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
  public status = false
  public Projectid = null

  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private EmployeeService: EmployeeService,
  ) { }

  AddEmployee = new Update_Employee("","","");

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.Projectid = params.Projectid
      this.AddEmployee = new Update_Employee(params.First,params.Last,params.Email);


        this.UpdateForm.setValue({
        id: params._id,
        First: params.First,
        Last: params.Last,
        Email: params.Email
      });

    })
  }



  UpdateForm = new FormGroup({
    id: new FormControl(""),
    First: new FormControl(""),
    Last: new FormControl(""),
    Email: new FormControl(""),

  });



  updateEmp() {

    this.EmployeeService.Employeeupdate(this.UpdateForm.value)
      .subscribe(data1 => {
        this.status = data1.status
        if(this.status == true){
         alert("updated")
        }
         
      })
     
  
  }

  Back(){
    this.router.navigate(['/employee'],{queryParams: {id:this.Projectid}});
  }

  

}




