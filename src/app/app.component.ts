import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: "<div class='container'><router-outlet></router-outlet></div>"
})
export class AppComponent {
  title = 'app';
}
