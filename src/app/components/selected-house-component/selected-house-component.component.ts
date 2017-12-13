import { Component, OnInit } from '@angular/core';
import { SelectedHouseService } from "../../services/selected-house.service"
import { ListFavesService } from "../../services/list-faves.service"
import { Router } from "@angular/router";

@Component({
  selector: 'app-selected-house-component',
  templateUrl: 'selected-house-component.component.html',
  styleUrls: ['selected-house-component.component.css']
})
export class SelectedHouseComponentComponent implements OnInit {
  public dataOfHouse = {};
  public flagOffaves: boolean;

  constructor(private router: Router, public selected: SelectedHouseService, public list: ListFavesService ) {
      this.flagOffaves = true;
  }

  public goBack(): void {
        window.history.back();
  }

  public addToFaves(dataOfHouse) {
      this.flagOffaves = false;
      this.list.setData(dataOfHouse);
  }

  public goToFaves() {
      this.router.navigate(["faves-component"]);
  }

  ngOnInit(): void {
      this.dataOfHouse = this.selected.getData();
  }
}
