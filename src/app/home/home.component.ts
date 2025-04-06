import { Component } from '@angular/core';
import { DonationCounterComponent } from '../donation-counter/donation-counter.component';

@Component({
  selector: 'cc-home',
  imports: [DonationCounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
