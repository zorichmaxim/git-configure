import { Injectable } from '@angular/core';

@Injectable()
export class ListSearchesService {
    public listOfSearches = []

  constructor() { }

  public setSearch(dataOfSearch):void {
        this.listOfSearches.push(dataOfSearch);
  }

  public getListOfSearches() {
        return this.listOfSearches;
  }

}
