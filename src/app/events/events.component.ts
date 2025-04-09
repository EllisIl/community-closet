import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface Event {
  id: number;
  title: string;
  address: string;
  time: string;
  type: string;
}

@Component({
  selector: 'cc-events',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [DatePipe]
})
export class EventsComponent implements OnInit {
  events: Event[] = [];
  newEvent: Event = { id: 0, title: '', address: '', time: '', type: '' };
  editId: number | null = null;
  editEvent: Event = { id: 0, title: '', address: '', time: '', type: '' };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.http.get<Event[]>('events.json').subscribe((data) => {
      this.events = data;
    });
  }

  addEvent(): void {
    const id = this.events.length > 0 ? Math.max(...this.events.map(e => e.id)) + 1 : 1;
    const newE = { ...this.newEvent, id };
    this.events.push(newE);
    this.newEvent = { id: 0, title: '', address: '', time: '', type: '' };
  }

  deleteEvent(id: number): void {
    this.events = this.events.filter(e => e.id !== id);
  }

  startEdit(event: Event): void {
    this.editId = event.id;
    this.editEvent = { ...event };
  }

  saveEdit(): void {
    const index = this.events.findIndex(e => e.id === this.editId);
    if (index !== -1) {
      this.events[index] = { ...this.editEvent };
    }
    this.cancelEdit();
  }

  cancelEdit(): void {
    this.editId = null;
    this.editEvent = { id: 0, title: '', address: '', time: '', type: '' };
  }
}
