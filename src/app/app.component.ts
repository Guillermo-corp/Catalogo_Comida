import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet,
    MatTabsModule, //Esto agrega la pestaña de navegación
  ],
  template: `
    <main>
      <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/images.png" alt="logo" aria-hidden="true">
      </header>
      </a>
      <section class="content">
      <mat-tab-group>
          <mat-tab label="Información General">
            <p>Contenido del Tab 1</p>
          </mat-tab>
          <mat-tab label="Recetas">
            <p>Contenido del Tab 2</p>
          </mat-tab>
          <mat-tab label="Reseñas de Usuarios">
            <p>Contenido del Tab 3</p>
          </mat-tab>
          <mat-tab label="Curiosidades">
            <p>Contenido del Tab 4</p>
          </mat-tab>
        </mat-tab-group>
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
