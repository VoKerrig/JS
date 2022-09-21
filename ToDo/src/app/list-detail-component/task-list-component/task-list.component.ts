import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { StorageService } from '../../services/storage.service';

@Component({
    selector: 'task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})

export class TaskList implements OnInit{

  constructor(private storageService: StorageService) { }
  
    allItems: string[] = [];
    done: string[] = [];
  ngOnInit(): void {
    this.allItems = this.storageService.allItems;
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
