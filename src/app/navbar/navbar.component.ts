import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen =false
  
  //buat toggleMenu
  toggleMenu(){
    console.log('isMenuOpen', this.isMenuOpen)
    this.isMenuOpen = !this.isMenuOpen
  }
}
