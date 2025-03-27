import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FoodLocation } from '../Foodlocation';
import { FoodService } from '../Food.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatTabsModule, MatIconModule], //Esto agrega la pestaña de navegación],
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
      <mat-icon>restaurant_menu</mat-icon>
      <section>
      <h3><strong>Receta de Garnachas Veracruzanas</strong></h3>
      <h4>Ingredientes</h4>
      <p><i>Para la masa:</i></p>
      <ul>
         <li>2 tazas de masa de maíz</li>
         <li>½ taza de agua (ajustar según la textura)</li>
         <li>½ cucharadita de sal</li>
         <li>Aceite o manteca para freír</li>
      </ul>
      <br>
      <p>Para la salsa:</p>
      <ul>
         <li>1 jitomates</li>
         <li>¼ de cebolla</li>
         <li>1 diente de ajo</li>
         <li>4 chiles guajillos secos (sin semillas y remojados)</li>
         <li>½ taza de agua</li>
      </ul>
      <br>
      <p>Para el relleno:</p>
      <ul>
         <li>250 g de carne de res deshebrada (falda o suadero)</li>
         <li>½ cebolla blanca</li>
         <li>1 diente de ajo</li>
        <li>Sal al gusto</li>
      </ul>
      </section>
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
