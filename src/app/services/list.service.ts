import { Injectable } from '@angular/core';
import { UserSlim } from '../users.model';
import { default as dataList } from '../../../src/customer-list.json';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor() { }

  // getCostumer(): Promise<UserSlim[]> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(function () {
  //       return resolve(dataList);
  //     }, 500);
  //   })
  // }

  getCostumer(): Promise<UserSlim[]> {
    return new Promise((resolve, reject) => {
      return resolve(dataList);
    })
  }
}
