import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MontyHallComponent } from './monty-hall/monty-hall.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MontyHallComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MontyHall';
}
