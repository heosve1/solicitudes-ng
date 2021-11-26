import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { UserCredentialsModel } from 'src/app/models/user-credentials.model';
import { SecurityService } from 'src/app/services/shared/security.service';
/*var CryptoJS = require("crypto-js")*/
import {MD5} from 'crypto-js'
declare const showGeneralMessage:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private securityService: SecurityService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      username:["", [Validators.required, Validators.email, Validators.minLength(ConfigurationData.EMAIL_MIN_LENGHT)]],
      password: ["", [Validators.required, Validators.minLength(ConfigurationData.PASSWORD_MIN_LENGHT)]]
    });
  }

  Login(){
    if(this.dataForm.invalid){
      showGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE)
    }else{
      let credentials = new UserCredentialsModel();
      credentials.username = this.GetDF["username"].value;
      credentials.password = MD5(this.GetDF["password"].value).toString();
      this.securityService.Login(credentials).subscribe({
        next: (data: any)=>{
          console.log(data);
      },
      error: (error: any) => {

      },
      complete: () =>{

      }});
    }
  }
  get GetDF(){
    return this.dataForm.controls;
  }
}