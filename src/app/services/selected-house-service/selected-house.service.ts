import { Injectable } from '@angular/core';

@Injectable()
export class SelectedHouseService {
  public selectedHouseData: any;
  constructor() {}

  public getData(): any{
    return this.selectedHouseData;
  };

  public setData(house): void{
    this.selectedHouseData = house;
  };
}
