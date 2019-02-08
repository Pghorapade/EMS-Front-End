import { Component, OnInit } from '@angular/core';
import { Update_Project } from 'src/app/login';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  status: any;

  constructor(
    private route: ActivatedRoute,
    private ProjectService: ProjectService,
    private router: Router,
    ) { }


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.UpdateForm.setValue({        
        id: params._id,
        name: params.name,
        leader: params.leader,
        Description: params.description
      });
    })
  }


  UpdateForm = new FormGroup({
    id: new FormControl(""),
    name: new FormControl(""),
    leader: new FormControl(""),
     Description: new FormControl(""),
  });



  updatePro() {
    this.ProjectService.projectupdate(this.UpdateForm.value)
      .subscribe(data1 => {
        this.status = data1.status
        if(this.status == true){
         alert("updated")
        }
               })
      
  }


  Back(){
    this.router.navigate(['/admin']);
  }

}
