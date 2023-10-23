import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }


  navigateToContactUs() {
    this.router.navigate(['/about']); // Replace '/products' with the desired route path
  }
}
window.onload = function() {
  let images = document.querySelector('.slider');
  let firstImage = document.querySelector('.hover-image');
  let container = document.querySelector('.image-container');

  if (images instanceof HTMLElement && firstImage instanceof HTMLElement && container instanceof HTMLElement) {
      let imageWidth = (firstImage as HTMLElement).offsetWidth;
      let totalWidth = images.children.length * imageWidth;
      let containerWidth = (container as HTMLElement).offsetWidth;

      if (totalWidth > containerWidth) {
          (images as HTMLElement).style.width = totalWidth + 'px';
      }
  }
};


