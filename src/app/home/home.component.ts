import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodLocationComponent } from '../Food-location/Food-location.component';
import { FoodLocation } from '../Foodlocation';
import { FoodService } from '../Food.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FoodLocationComponent
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filtrar por ciudad" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Buscar</button>
      </form>
    </section>
    <section class="results">
      <app-Food-location
        *ngFor="let FoodLocation of filteredLocationList"
        [FoodLocation]="FoodLocation">
      </app-Food-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  FoodLocationList: FoodLocation[] = [];
  FoodService: FoodService = inject(FoodService);
  filteredLocationList: FoodLocation[] = [];

  constructor() {
    this.FoodService.getAllFoodLocations().then((FoodLocationList: FoodLocation[]) => {
      this.FoodLocationList = FoodLocationList;
      this.filteredLocationList = FoodLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.FoodLocationList;
      return;
    }
    this.filteredLocationList = this.FoodLocationList.filter(
      FoodLocation => FoodLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}