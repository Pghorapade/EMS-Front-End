import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { project } from 'src/app/login';
import { FormsModule, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  public Description 
  public Project1
  public leader
  

  constructor(  private ProjectService: ProjectService,
                 private router : Router,
                 public fbobj: FormBuilder,  
                 ) { }

  Addproject = new project("","","");
  Form = this.fbobj.group(
    {
      Project1: ['', [Validators.required]],
      leader:  ['', [Validators.required]],
    }
  );
  
  ngOnInit() {
  }

  subProject(){
      this.Addproject = new project(this.Project1,this.leader,this.Description);   
    this.ProjectService.projectPost(this.Addproject)
      .subscribe((data1:any) => {
      })
  }

  Back(){
    this.router.navigate(['/admin']);

  }

}
