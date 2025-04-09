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
    this.http.get<any>('http://localhost:3000/api/donations').subscribe({
      next: (data) => {
        this.totalPounds = data.pounds
        console.log(data.pounds)
      },
      error: (err) => {
        console.error('HTTP error:', err);
      }
    });
    
  }
  increment(): void {
    this.totalPounds += 1;
  }
  
}
