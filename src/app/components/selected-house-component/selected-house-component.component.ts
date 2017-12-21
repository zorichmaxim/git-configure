import { Component, OnInit } from '@angular/core';
import { SelectedHouseService } from "../../services/selected-house-service/selected-house.service"
import { ListFavesService } from "../../services/list-faves-service/list-faves.service"
import { Router } from "@angular/router";
import { ListSearchesService } from "../../services/list-searches-service/list-searches.service";
import { Location } from '@angular/common'


@Component({
  selector: 'app-selected-house-component',
  templateUrl: 'selected-house-component.component.html',
  styleUrls: ['selected-house-component.component.css']
})
export class SelectedHouseComponentComponent implements OnInit {
  public dataOfHouse = {};
  public flagOfFaves: boolean;

  constructor(private router: Router,
              public selected: SelectedHouseService,
              public list: ListFavesService,
              public _location: Location) {
      this.flagOfFaves = true;
  }

  public goBack(): void {
      this._location.back();
  }

  public addToFaves(dataOfHouse) {
      this.flagOfFaves = false;
      this.list.setData(dataOfHouse);
  }

  public goToFaves() {
      this.router.navigate(["faves-component"]);
  }

  ngOnInit(): void {
      this.dataOfHouse = this.selected.getData();
  }
}
