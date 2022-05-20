import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class DataSendService {
  private baseUrl="http://localhost:8080/"
  constructor(private httpclient:HttpClient) { }
  
  sendData(data:Data):Observable<boolean>{  
     return this.httpclient.post<boolean>(`${this.baseUrl}`+"valid", {
      data
    })
  }
}
