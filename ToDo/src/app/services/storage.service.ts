import { Injectable, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  allItems: string[] = [];
  done: string[] = [];

  constructor() { }

  public test() {
    console.log('1')
  }

  storeName(value:string) {
    localStorage.setItem('Task', JSON.stringify(value))
  }
}
