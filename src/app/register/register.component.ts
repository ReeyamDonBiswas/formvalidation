import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginFrom=new FormGroup({
    AssociateName:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(30)]),
   
    AssociateId:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(7),Validators.pattern('[0-9]*')]),
    ProjectId:new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(13),Validators.pattern('^[a-zA-Z0-9-]*$')]),
    emailname: new FormControl('',[Validators.required,Validators.email]),
    Comments:new FormControl('',Validators.required),
    
    Passwordname:new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern('^[a-zA-Z0-9-]*$')]),
    Passwordnamecom:new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern('^[a-zA-Z0-9-]*$')]),
  })
  constructor() { }

  ngOnInit(): void {
  }
  collectData(){
    console.log
    (this.loginFrom.value);
    alert("All submission is ok")
    
 
  }

 get AssociateName(){return this.loginFrom.get('AssociateName')};
 get emailname(){return this.loginFrom.get('emailname')};
 get Comments(){return this.loginFrom.get('Comments')};
 get AssociateId(){return this.loginFrom.get('AssociateId')};
 get ProjectId(){return this.loginFrom.get('ProjectId')};
 get Passwordname(){return this.loginFrom.get('Passwordname')};
 get Passwordnamecom(){return this.loginFrom.get('Passwordnamecom')};
 
 
}
