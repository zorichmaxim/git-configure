import { Injectable, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage-service/local-storage.service';

@Injectable()
export class ListFavesService implements OnInit {
    public listOfFaves = [];

    constructor(private localstorage: LocalStorageService) {}

    ngOnInit(): void {
        this.checkLocalStorageState();
    }

    public setData(data): void {
        this.listOfFaves.push(data);
        this.localstorage.setData('listOfFaves', this.listOfFaves);
    }

    public getData() { // Тип какой?
        return this.listOfFaves;
    }

    public deleteElementFromList(house: any): void {
        const pos = this.listOfFaves.findIndex(element => {
            if (element.lister_url.slice(34, 59) === house.lister_url.slice(34, 59)) {
                return true;
            }
        });
        this.listOfFaves.splice(pos, 1);
        this.localstorage.setData('listOfFaves', this.listOfFaves);
    }

    public chekingOfUniq(house: any): boolean {
        let result = false;
        this.listOfFaves.forEach(element => {
            if (element.lister_url.slice(34, 59) === house.lister_url.slice(34, 59)) {
                result = true;
            }
        });
        return result;
    }

    public clearListOfFaves(): void {
        this.listOfFaves = [];
    }
    private checkLocalStorageState(): boolean {
        return this.localstorage.haslocalStorage('listOfFaves')
            ? this.clearListOfFaves()
            : this.listOfFaves = this.localstorage.getData('listOfFaves');
    }
}

