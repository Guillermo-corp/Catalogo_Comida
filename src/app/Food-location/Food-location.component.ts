import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodLocation } from '../Foodlocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-Food-location',
  standalone: true,
  imports: [
            CommonModule,
            RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="FoodLocation.photo" alt="Exterior photo of {{FoodLocation.name}}">
      <h2 class="listing-heading">{{ FoodLocation.name }}</h2>
      <p class="listing-location">{{ FoodLocation.city}}, {{FoodLocation.state }}</p>

     <!-- Imágenes de "Me gusta" y "No me gusta" -->
      <div class="like-dislike">
        <img 
          src="assets/thumbs-up.png" 
          alt="Me gusta" 
          (click)="rate('like')" 
          [class.active]="rating === 'like'"
        >
        <img 
          src="assets/thumbs-down.png" 
          alt="No me gusta" 
          (click)="rate('dislike')" 
          [class.active]="rating === 'dislike'"
        >
      </div>

      <a [routerLink]="['/details', FoodLocation.id]">Leer Más</a>
    </section>
  `,
  styleUrls: ['./Food-location.component.css'],
})

export class FoodLocationComponent {

  @Input() FoodLocation!: FoodLocation;
  
  // Propiedad para guardar la valoración
  rating: string = '';

  // Método para manejar la valoración
  rate(value: string): void {
    this.rating = value;
    console.log(`Valoración para ${this.FoodLocation.name}: ${value}`);
  }
}
