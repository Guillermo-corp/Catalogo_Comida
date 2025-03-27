import { Component } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent {
  likeStatus: string = ''; // Aquí guardamos si el usuario dio "me gusta" o "no me gusta"

  // Método para manejar la selección
  setLikeStatus(status: string): void {
    this.likeStatus = status;
    console.log('Valoración:', this.likeStatus); // Puedes enviarlo a un backend o almacenar en una base de datos
  }
}
