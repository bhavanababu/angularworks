import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firstpro';
  name="Angular Test";
  framework={name:"angular",language:"type-script",rating:4.5}
}
