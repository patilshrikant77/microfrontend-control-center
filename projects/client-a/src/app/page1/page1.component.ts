import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  template: `
  <div class="card">

  <div class="header">
      <h2 class="title">Pharmacy Delivery </h2>
  </div>
  <div class="content">
  
  Pharmacy Delivery Business Module 1 Component functionality goes here
  
  </div>
  </div>
  `
})
export class Page1Component  {

    constructor(private router: Router) {

    }
    
    control = new FormControl();

    search() {
        this.router.navigate(['.'], { queryParamsHandling: 'merge', queryParams: { id: 17 }});
        window.dispatchEvent(new CustomEvent('client-message', { detail: 17 }));
    }

  
}
