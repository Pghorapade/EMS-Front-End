import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { map, filter, scan } from 'rxjs/operators';
import { Alert } from 'selenium-webdriver';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
public EmployeeInfo
public projectid
showDeletedMessage: boolean;
searchText: string = "";
  constructor( private router : Router,
    private EmployeeService: EmployeeService,
    private route: ActivatedRoute
    ) { }


   
  ngOnInit() { 

    this.route.queryParams.subscribe(params => {
      this.projectid = params['id'];
           });

    this.EmployeeService.EmployeeGet(this.projectid)
    .subscribe(data1 => {
      this.EmployeeInfo = data1
    }) 

   

  }

  Home(){
    this.router.navigate(['/admin'])
    
  }

  addemployee(){
    this.router.navigate(['/addemployee'],{queryParams: {id:this.projectid}})
  }

  removeInfo(Employee){
    if (confirm(' Are you sure to cancel this information ?')) 
    {
      this.EmployeeService.Employeedelete(Employee)
      .subscribe(data1 => {
        if(data1.status==true){ 
            window.location.reload()
            this.showDeletedMessage = true;
        }   
      })
    }
    }

    updateInfo(employee){
      this.router.navigate(['/updateemployee'],{queryParams: employee})
    }

    filterCondition(Employee) 
    {
      return Employee.First.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
    }

}
