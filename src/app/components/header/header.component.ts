import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faDoorOpen = faDoorOpen;
  show!: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {      
      if(this.router.url.includes('/login')){
        this.show=false;        
      }else{
        this.show=true;
      }      
   });
}
  logOut(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
