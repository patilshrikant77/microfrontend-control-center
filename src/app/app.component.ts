import { Component } from '@angular/core';
import { ShellService } from './shell/shell.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private shellService: ShellService) {
  }

  ngOnInit() {

    this.shellService.init({ 
      initialRoute: '/client-a/page1',
      outletId: 'content',
      preload: true,
      clients: {
        "client-a": {
          loaded: false,
          src: 'assets/micro-frontends/client-a/main.js',
          element: 'client-a',
          route: '/client-a'
        },
        "client-b": {
          loaded: false,
          src: 'assets/micro-frontends/client-b/main.js',
          element: 'client-b',
          route: '/client-b'
        },
       
      }});

     
  }

}
