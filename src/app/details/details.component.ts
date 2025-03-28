import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FoodLocation } from '../Foodlocation';
import { FoodService } from '../Food.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatTabsModule, MatIconModule, MatCardModule], //Esto agrega la pestaña de navegación],
  template: `
    <article>
      <img class="listing-photo" [src]="FoodLocation?.photo"
        alt="Exterior photo of {{FoodLocation?.name}}"/>
      <section class="listing-description">
        <h2 class="listing-heading">{{FoodLocation?.name}}</h2>
        <p class="listing-location">{{FoodLocation?.city}}, {{FoodLocation?.state}}</p>
      </section>
      <mat-tab-group>
        <mat-tab label="Información General">
          <mat-icon>info</mat-icon>
          <section>
            <h3><strong>Descripción</strong></h3>
            <p>{{ FoodLocation?.description || 'No hay descripción disponible.' }}</p>
            <br>
            <h3><strong>Origen</strong></h3>
            <p>{{ FoodLocation?.origin || 'No hay información sobre el origen.' }}</p>
            <br>
            <h3><strong>Variedades</strong></h3>
            <ul>
              <li *ngFor="let variety of FoodLocation?.varieties">{{ variety }}</li>
            </ul>
          </section>
        </mat-tab>
        <mat-tab label="Recetas">
          <mat-icon>restaurant_menu</mat-icon>
          <section>
            <h3><strong>Receta</strong></h3>
            <h4>Ingredientes</h4>
            <ul>
              <li *ngFor="let ingredient of FoodLocation?.recipe?.ingredients">{{ ingredient }}</li>
            </ul>
            <br>
            <h4>Preparación</h4>
            <p>{{ FoodLocation?.recipe?.preparation || 'No hay receta disponible.' }}</p>
          </section>
        </mat-tab>
        <mat-tab label="Reseñas de Usuarios">
          <section class="reviews-section">
            <mat-card *ngFor="let review of FoodLocation?.reviews" class="review-card">
              <mat-card-header>
                <mat-card-title>{{ review.user }}</mat-card-title>
                <mat-card-subtitle>{{ review.date | date }}</mat-card-subtitle>
              </mat-card-header>
              <mat-card-content>
                <p>{{ review.comment }}</p>
                <div class="rating">
                  <mat-icon *ngFor="let star of [1, 2, 3, 4, 5]" [class.filled]="star <= review.rating">
                    star
                  </mat-icon>
                </div>
              </mat-card-content>
            </mat-card>
          </section>
        </mat-tab>
        <mat-tab label="Curiosidades">
          <p>{{ FoodLocation?.curiosities || 'No hay curiosidades disponibles.' }}</p>
        </mat-tab>
      </mat-tab-group>
    </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  FoodService = inject(FoodService);
  FoodLocation: FoodLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const FoodLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.FoodService.getFoodLocationById(FoodLocationId).then(FoodLocation => {
      this.FoodLocation = FoodLocation;
    });
  }
}
