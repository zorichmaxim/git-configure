import { Injectable } from '@angular/core';

@Injectable()
export class SelectedHouseService {
  public selectedHouseData = {};
  constructor() { }

  public getData(){
    return this.selectedHouseData;
  };

  public setData(house): void{
    this.selectedHouseData = house;
  };
}
