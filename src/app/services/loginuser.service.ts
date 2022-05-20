import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { Register } from '../interfaces/register';

@Injectable({
  providedIn: 'root'
})

export class LoginuserService {
  
  private baseUrl="http://localhost:8080/api/v1/"
  constructor(private httpclient:HttpClient) { }
  
  loginUser(user:User):Observable<boolean>{
    
    return this.httpclient.post<boolean>(`${this.baseUrl}`+"login", {
      email: user.userId,
      password: user.password
    })
  }
  registerUser(register:Register):Observable<boolean>{
  
    return this.httpclient.post<boolean>(`${this.baseUrl}`+"register", {
      name:register.name,	
      lastName:register.lastname,	
      email:register.email,
      password:register.password
    })
  }
}
