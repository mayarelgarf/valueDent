import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router,private viewportScroller: ViewportScroller){}

  scrollToFooter() {
    // Navigate to the footer component route
    this.router.navigate(['/footer-component']);

    // Scroll to the footer element with the specified ID after a slight delay
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor('footer-content');
    }, 100); // Adjust the delay as needed
  }

}
