import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';

interface Event {
  id: number;
  title: string;
  address: string;
  time: string;
  type: string;
}

@Component({
  selector: 'cc-events',
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
  providers: [DatePipe]
})
export class EventsComponent implements OnInit {
  events: Event[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.http.get<Event[]>('./assets/events.json').subscribe((data) => {
      console.log(this.events)
      this.events = data;
    });
  }
}
