import { Injectable } from '@angular/core';
import { FoodLocation } from './Foodlocation';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  url = 'http://localhost:3000/locations';



  async getAllFoodLocations(): Promise<FoodLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getFoodLocationById(id: number): Promise<FoodLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
