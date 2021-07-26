import { Component } from '@angular/core';
import { ViewEncapsulation, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  //selector: 'client-a-widget',
  template: `
  <div id="widget">
  <div class="card">
    <div class="header">
      <h1>Pharmacy Delivery Business Module 1 Widgets</h1>
    </div>
    <div class="content">
      Pharmacy Delivery Business Module 1 Widgets Functionality goes here
  </div>
</div>
</div>


  `,
  styles: [`
        #widget { padding:10px; border: 2px darkred dashed }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class ClientAWidgetComponent implements OnInit {
    control = new FormControl();
    value$: Observable<string>;
  
    ngOnInit(): void {
      this.control.valueChanges.subscribe(x => console.debug(x));
      this.value$ = this.control.valueChanges;
    }

    clickMe(): void {
      console.debug('ouch!');
    }
}
