import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FoodLocation } from '../Foodlocation';
import { FoodService } from '../Food.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatTabsModule], //Esto agrega la pestaña de navegación],
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
        <section>
      <h3><strong>Descripción</strong></h3>
      <p>La garnacha es un antojito mexicano muy popular, especialmente en los estados de Veracruz y Oaxaca. 
         Su origen es incierto, pero se cree que tiene influencias tanto indígenas como españolas.
      </p>
      <br>
      <h3><strong>Origen</strong></h3>
      <p>Principalmente de Veracruz y Oaxaca, aunque hay variaciones en otros estados.</p>
      <br>
      <h3><strong>Variedades</strong></h3>
      <p>Hay diferentes variedades de garnachas, algunas de las más populares son:</p>
      <ul>
         <li><strong>Sopes:</strong> Tortilla gruesa con frijoles, crema, queso y carne.</li>
         <li><strong>Tlacoyos:</strong> Masa ovalada rellena de frijoles, habas o requesón, servida con nopales y salsa.</li>
         <li><strong>Huaraches:</strong> Similar al tlacoyo, pero más grande y con carne, queso y nopales.</li>
         <li><strong>Chalupas:</strong> Pequeñas tortillas con salsa verde o roja y carne deshebrada.</li>
      </ul>
      <br>
    </section>
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

  /*
  submitApplication() {
    this.FoodService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }*/
}
