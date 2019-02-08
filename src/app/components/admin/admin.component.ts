import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { project } from 'src/app/login';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
public ProjectName 
public projectId
public showDeletedMessage: boolean;
searchText: string = "";


  constructor(private ProjectService: ProjectService,
    private EmployeeService: EmployeeService,
    private router : Router
    ) {  }

  ngOnInit() {  
    this.EmployeeService.currentMessage.subscribe(message => this.projectId = message)
      this.ProjectService.projectGet()
    .subscribe(data1 => {
      this.ProjectName = data1
    }) 
  }

  addProject(){
    this.router.navigate(['/addProject'],)
  }

  onselect(Project){
    this.projectId = Project._id
    this.router.navigate(['/employee'],{queryParams: {id:this.projectId}})
    this.EmployeeService.changeMessage(this.projectId)
  }

  removeInfo(Project){
    if (confirm(' Are you sure to delete this project ?')) 
    {
      this.ProjectService.projectdelete(Project)
      .subscribe(
        data1 => {
        if(data1.status==true){ 
            window.location.reload()
            this.showDeletedMessage = true;
        }   
      })
    }
    }
    updateInfo(Project){
      this.router.navigate(['/updateproject'],{queryParams: Project})
    }

    filterCondition(Project) 
    {
      return Project.name.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
    }


  
}
