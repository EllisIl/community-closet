import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { ReservationsComponent } from './app/reservations/reservations.component';
import { EventsComponent } from './app/events/events.component';
import { DonationsComponent } from './app/donations/donations.component';
import { NewsComponent } from './app/news/news.component';
import { PhotosComponent } from './app/photos/photos.component';
import { HomeComponent } from './app/home/home.component';

bootstrapApplication(AppComponent, {
  providers: [
    HttpClientModule,  // Add HttpClientModule here
    provideRouter([
      { path: 'reservations', component: ReservationsComponent },
      { path: 'events', component: EventsComponent },
      { path: 'donations', component: DonationsComponent },
      { path: 'news', component: NewsComponent },
      { path: 'photos', component: PhotosComponent },
      { path: '', component: HomeComponent }
    ])
  ]
}).catch(err => console.error(err));
