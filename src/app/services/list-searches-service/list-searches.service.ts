import { Injectable, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage-service/local-storage.service';

@Injectable()
export class ListSearchesService implements OnInit {
    public listOfSearches = [];

    constructor(private localstorage: LocalStorageService) {}

    ngOnInit(): void {
        this.checkLocalStorageState();
    }

    public setSearch(dataOfSearch): void {
        this.listOfSearches.unshift(dataOfSearch);
        this.localstorage.setData('listOfSearches', this.listOfSearches.slice(0, 5));
    }

    public getListOfSearches(): Array<Object> {
        return this.listOfSearches;
    }

    public removeSearch(pos): void {
        this.listOfSearches.splice(pos, 1);
    }

    public clearListOfSearches(): void {
        this.listOfSearches = [];
    }

    public getLastSearch(): any {
        return this.listOfSearches[0];
    }

    private checkLocalStorageState(): void {
        !this.localstorage.haslocalStorage('listOfSearches')
            ? this.clearListOfSearches()
            : this.listOfSearches = this.localstorage.getData('listOfSearches');
    }
}
