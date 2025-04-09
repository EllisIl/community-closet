import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DonationService } from '../donations.service';  // Make sure you import the DonationService
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'cc-donations',
  imports: [CommonModule, HttpClientModule],  // Add HttpClientModule here
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  totalPounds: number = 0; // Property to hold the donation total

  constructor(private donationService: DonationService) {}

  ngOnInit(): void {
    // Fetch the current donation total when the component initializes
    this.donationService.fetchDonationTotal();
    // Subscribe to the BehaviorSubject in DonationService to get the total
    this.donationService.donationTotal.subscribe(
      (total) => this.totalPounds = total
    );
  }

  addPound(): void {
    // Call the addPound method from DonationService to increment the total
    this.donationService.addPound();
  }
}
