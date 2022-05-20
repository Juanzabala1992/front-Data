import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginuserService } from 'src/app/services/loginuser.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formregister!: FormGroup;
  constructor(private formBuilder:FormBuilder, 
    private loginService:LoginuserService,
    private router: Router 
    ) { }

  ngOnInit(): void {
    this.formregister = this.formBuilder.group({
      name:['',[Validators.required, Validators.minLength(3)]],
      lastname:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]]  
    });
  }
  register(){
     this.loginService.registerUser(this.formregister.value).subscribe((value)=>{ 
            
      if (value){
        this.router.navigate(['/login']);
      }else{
        alert("Datos incorrectos")
      }       
    },(error) =>{
      alert("Datos incorrectos")
      console.log(error);
    })

  }
  get email(){return this.formregister.get('email') }
  get password(){return this.formregister.get('password') }
  get name(){return this.formregister.get('name') }
  get lastname(){return this.formregister.get('lastname') }
}
