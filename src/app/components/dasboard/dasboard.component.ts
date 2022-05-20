import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSendService } from 'src/app/services/data-send.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  formData!: FormGroup;
  dataPattern = "([0-9])+[\,-\d]+([0-9])";
  constructor(private formBuilder:FormBuilder, 
    private dataSendService:DataSendService,
    private router: Router,
 
    ) { }

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      data:['',[Validators.required, Validators.pattern(this.dataPattern)]]
    });
  }
  dataSend(){    
    this.dataSendService.sendData(this.formData.value.data).subscribe((value:any)=>{
      
     if(value[0]=="Numero negativo"){
      Swal.fire({
        icon: 'error',
        title: 'Error.',
        text: 'Existe un número negativo'   
      })
     }
     else if(value.length==1 && value[0]!="Numero negativo"){
      Swal.fire({
        icon: 'success',
        title: 'Resultado',
        text: value  
      })
     }else{
      Swal.fire({
        icon: 'success',
        title: 'Resultado',
        text: value  
      })
     }
           
    },(error) =>{
      alert("Datos incorrectos"+ error)
      
    })    
  }

  get data(){      
    return this.formData.get('data') }

  }
