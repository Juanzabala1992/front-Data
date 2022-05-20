import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login/login.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';
import {VigilanteGuard} from 'src/app/guards/vigilante.guard';


const routes:Routes = [
      {
        path:"login",
        component:LoginComponent,
        pathMatch: 'full'
      },
      {
        path:"register",
        component:RegisterComponent,
        pathMatch: 'full'
      },
      {
        path:"dashboard",
        component:DasboardComponent,
        pathMatch: 'full',
        canActivate:[VigilanteGuard]

      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
       }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
