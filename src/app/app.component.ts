import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet,
    MatPaginatorModule,
    SidenavComponent,
    MatBadgeModule, 
    MatIconModule,
  ],
  template: `
    <main>
      <app-sidenav></app-sidenav> 
      <div class="content">
        <header class="brand-name">
          <a [routerLink]="['/']">
            <img class="brand-logo" src="/assets/images.png" alt="logo" aria-hidden="true">
          </a>
          <button mat-icon-button matBadge="1" matBadgePosition="above after" matBadgeColor="primary" class="ShoppingCart-button">
            <mat-icon>shopping_cart_checkout</mat-icon>
          </button>
        </header>
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
