import { Component, OnInit } from '@angular/core';
import { ListFavesService} from "../../services/list-faves-service/list-faves.service"
import { Location } from '@angular/common'
import { Router } from "@angular/router";

@Component({
  selector: 'app-faves-component',
  templateUrl: 'faves-component.component.html',
  styleUrls: ['faves-component.component.css']
})
export class FavesComponentComponent implements OnInit {
    public listOfFaves: Array<any>;

  constructor(
      private list: ListFavesService,
      private _location: Location,
      private router: Router
  ) {}

  public goBack(): void {
        this._location.back();
  }

  public goHome(): void{
      this.router.navigate(['home-component']);
  }

  public removeFromFaves(house: any): void {
      this.list.deleteElementFromList(house);
  }

  ngOnInit() {
      this.listOfFaves = this.list.getData();
  }
}
