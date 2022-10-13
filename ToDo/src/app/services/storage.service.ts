import { Injectable, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _task$: BehaviorSubject<string[]>;
  done: string[] = [];
  tasks$: Observable<string[]>;

  constructor() {
    this._task$ = new BehaviorSubject(JSON.parse(localStorage.getItem('Task') as string) || [] as string[]);
    this.tasks$ = this._task$.asObservable();
    // console.log('test');
   }

  getTasks() {
    return this._task$.getValue()
  }

  addTask(value: string):void {
    const tasks = this._task$.getValue();
    console.log(tasks)
    tasks.push(value);
    this._task$.next(tasks);
    localStorage.setItem('Task', JSON.stringify(this.getTasks()));
    
  }
}
