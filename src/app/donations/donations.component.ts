import { Component } from '@angular/core';
import { DonationCounterComponent } from '../donation-counter/donation-counter.component';

@Component({
  selector: 'cc-donations',
  imports: [DonationCounterComponent],
  templateUrl: './donations.component.html',
  styleUrl: './donations.component.css'
})
export class DonationsComponent {

}
