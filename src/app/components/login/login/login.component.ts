import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { LoginuserService } from '../../../services/loginuser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User();
  formLogin!: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    constructor(private formBuilder:FormBuilder, 
      private loginService:LoginuserService,
      private router: Router
      ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      userId:['',[Validators.required,Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]],
    });    
  }
  userLogin(){
    this.loginService.loginUser(this.formLogin.value).subscribe((value)=>{ 
      console.log(value)     
      if (value){
        localStorage.setItem("user-login", JSON.stringify(value));
        this.router.navigate(['/dashboard']);
      }else{
        alert("Usuario o contraseña incorrectos")
      }       
    },(error) =>{
      alert("Usuario o contraseña incorrectos")
      console.log(error);
    })

  }
  get userId(){return this.formLogin.get('userId') }
  get password(){return this.formLogin.get('password') }
}
