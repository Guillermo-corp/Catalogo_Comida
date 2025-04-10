import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodLocationComponent } from '../Food-location/Food-location.component';
import { FoodLocation } from '../Foodlocation';
import { FoodService } from '../Food.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    FoodLocationComponent,
    MatPaginatorModule
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
        *ngFor="let FoodLocation of paginatedLocationList"
        [FoodLocation]="FoodLocation">
      </app-Food-location>
    </section>
    <mat-paginator
      [length]="filteredLocationList.length"
      [pageSize]="pageSize"
      [pageSizeOptions]="[4, 8, 12]"
      (page)="onPageChange($event)">
    </mat-paginator>
  `,
})

export class HomeComponent {
  FoodLocationList: FoodLocation[] = [];
  FoodService: FoodService = inject(FoodService);
  filteredLocationList: FoodLocation[] = [];
  paginatedLocationList: FoodLocation[] = [];
  pageSize: number = 4;
  currentPage: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.FoodService.getAllFoodLocations().then((FoodLocationList: FoodLocation[]) => {
      this.FoodLocationList = FoodLocationList;
      this.filteredLocationList = FoodLocationList;
      this.updatePaginatedList();
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.FoodLocationList;
    } else {
      this.filteredLocationList = this.FoodLocationList.filter(
        FoodLocation => FoodLocation?.city.toLowerCase().includes(text.toLowerCase())
      );
    }
    this.currentPage = 0;
    this.updatePaginatedList();
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedList();
  }

  updatePaginatedList() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedLocationList = this.filteredLocationList.slice(startIndex, endIndex);
  }
}