import { Injectable } from '@angular/core';
import { User } from '../users.model';
import { default as dataDetails } from '../../../src/customer-details.json';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }

  getUserById(id: number): User | undefined {
    return dataDetails.find((r: User) => r.id === id);
  }
}
