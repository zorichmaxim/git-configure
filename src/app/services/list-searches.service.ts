import { Injectable } from '@angular/core';

@Injectable()
export class ListSearchesService {
    public listOfSearches = []

  constructor() { }

  public setSearch(dataOfSearch): void {
        this.listOfSearches.unshift(dataOfSearch);
  }

  public getListOfSearches() {
        return this.listOfSearches;
  }

  public removeSearch (pos): void{
        this.listOfSearches.splice(pos, 1);
  }
}
