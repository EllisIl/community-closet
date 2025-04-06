import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

interface Event {
  id: number;
  title: string;
  address: string;
  time: string;
  type: string;
}

@Component({
  selector: 'cc-events',
  imports: [CommonModule, HttpClientModule],  // Add HttpClientModule here
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [DatePipe]
})
export class EventsComponent implements OnInit {
  events: Event[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.http.get<Event[]>('events.json').subscribe((data) => {
      this.events = data;
    });
  }
}
