import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { StorageService } from '../../services/storage.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})

export class TaskList implements OnInit{
  tasks$: Observable<string[]>;
  done: string[] = [];

  constructor(private storageService: StorageService) {
    this.tasks$ = this.storageService.tasks$;
  }
  
  ngOnInit(): void {
    this.done = this.storageService.done;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
