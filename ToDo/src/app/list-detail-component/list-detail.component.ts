import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
    selector: 'list-detail',
    templateUrl: './list-detail.component.html',
    styleUrls: ['./list-detail.component.scss']
})

export class ListDetail {

    constructor(private storageService: StorageService) { };

    addItem(value:string) {
        this.storageService.addTask(value)
    }

    storeClear() {
        localStorage.clear()
    }
}
