import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet,
    MatPaginatorModule,
    SidenavComponent 
  ],
  template: `
    <main>
    <app-sidenav></app-sidenav> 
      <div class="content">
        <a [routerLink]="['/']">
          <header class="brand-name">
            <img class="brand-logo" src="/assets/images.png" alt="logo" aria-hidden="true">
          </header>
        </a>
        <section class="content">
          <router-outlet></router-outlet>
        </section>
      </div>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
