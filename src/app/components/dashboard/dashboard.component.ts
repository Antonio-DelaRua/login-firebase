import { Component, OnInit, Renderer2 } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isMenuOpen: boolean = false;
  dataUser: any;

  constructor(private afAuth: AngularFireAuth, private router: Router,private rendered: Renderer2 ) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const navbar = document.getElementById('navbarNav');
    if (navbar) {
      if (this.isMenuOpen) {
        this.rendered.addClass(navbar, 'show');
      } else {
        this.rendered.removeClass(navbar, 'show');
      }
    }
  }

  ngOnInit(): void {
    this.afAuth.currentUser.then(user => {
      if(user && user.emailVerified ){
        this.dataUser = user;
      }else{
        this.router.navigate(['/login']);

      }
    })
  }

  logout(){
    this.afAuth.signOut().then(() => this.router.navigate(['/login']) )
  }

}
