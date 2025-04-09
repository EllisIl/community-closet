import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'; // Import BehaviorSubject

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private donationTotalSubject = new BehaviorSubject<number>(0); // Initialize with 0
  donationTotal = this.donationTotalSubject.asObservable(); // Observable to expose

  constructor(private http: HttpClient) {}

  // Fetch the current donation total
  fetchDonationTotal() {
    this.http.get<any>('http://localhost:3000/api/donations')
      .subscribe({
        next: (data) => {
          this.donationTotalSubject.next(data.pounds); // Update the BehaviorSubject
        },
        error: (err) => console.error('Error fetching donation total', err)
      });
  }

  // Increment the donation total by 1 pound
  addPound() {
    this.http.post<any>('http://localhost:3000/api/donations/increment', {})
      .subscribe({
        next: (data) => {
          this.donationTotalSubject.next(data.pounds); // Update the total
        },
        error: (err) => console.error('Error incrementing donation total', err)
      });
  }
}
