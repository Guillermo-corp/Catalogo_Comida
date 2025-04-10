import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { SidenavComponent } from '../sidenav/sidenav.component';


@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [RouterLink, MatCardModule, RouterOutlet, SidenavComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
 
}
