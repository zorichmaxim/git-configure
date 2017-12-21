import { Component, OnInit } from '@angular/core';
import { ListFavesService} from "../../services/list-faves-service/list-faves.service"
import { Location } from '@angular/common'

@Component({
  selector: 'app-faves-component',
  templateUrl: 'faves-component.component.html',
  styleUrls: ['faves-component.component.css']
})
export class FavesComponentComponent implements OnInit {
    public listOfFaves: Array<any>;

  constructor(public list: ListFavesService, private _location: Location) { }

  public goBack(): void {
        this._location.back();
  }
  public removeFromFaves(pos: number): void {
      this.list.deleteElementFromList(pos);
  }

  ngOnInit() {
      this.listOfFaves = this.list.getData();
  }

}
