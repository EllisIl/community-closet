import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-donation-counter',
  imports: [CommonModule, HttpClientModule],  // Add HttpClientModule here
  templateUrl: './donation-counter.component.html',
  styleUrls: ['./donation-counter.component.css']
})
export class DonationCounterComponent implements OnInit {
  totalPounds: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchDonationData();
  }

  fetchDonationData(): void {
    // Ideally, replace this with an actual API call
    this.http.get<any>('donations.json').subscribe((data) => {
      // Assuming the total donated pounds are stored in data.totalPounds
      this.totalPounds = data.totalPounds || 0;
    });
  }
}
