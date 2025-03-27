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
      <a [routerLink]="['/details', FoodLocation.id]">Leer Más</a>
    </section>
  `,
  styleUrls: ['./Food-location.component.css'],
})

export class FoodLocationComponent {

  @Input() FoodLocation!: FoodLocation;

}
