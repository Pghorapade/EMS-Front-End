import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, NgForm, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../login';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
 
  private email
  private passowrd
  public data1


  constructor(
    private loginService: LoginService,
    public fbobj: FormBuilder,
    private router: Router
             ) { }


  admin = new User("", "");

  Form = this.fbobj.group(
    {
      email: ['', [Validators.required, Validators.email]],
      passowrd: ['', [Validators.required, Validators.minLength(6)]]
    }
  );

  submit() {
    this.admin = new User(this.email, this.passowrd);
    this.loginService.login(this.admin)
      .subscribe(data => {
         this.data1 = data
        if (this.data1.status == true) {
          this.router.navigate(['/admin']);
         }else{
           alert("wrong email id and password")    
         }
      })
   

  }

  ngOnInit() {
  }

}
