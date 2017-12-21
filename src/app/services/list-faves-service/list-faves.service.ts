import { Injectable } from '@angular/core';

@Injectable()
export class ListFavesService {
    public listOfFaves = [];

    constructor() {
    }

    public setData(data): void {
        this.listOfFaves.push(data);
    }

    public getData() {
        return this.listOfFaves;
    }

    public deleteElementFromList(pos: number): void{
        this.listOfFaves.splice(pos,1);
    }
}
