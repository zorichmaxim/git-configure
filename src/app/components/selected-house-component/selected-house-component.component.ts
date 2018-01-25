import { Component, OnInit } from '@angular/core';
import { SelectedHouseService } from '../../services/selected-house-service/selected-house.service'
import { ListFavesService } from '../../services/list-faves-service/list-faves.service'
import { Router } from '@angular/router';
import { Location } from '@angular/common'


@Component({
    selector: 'app-selected-house-component',
    templateUrl: 'selected-house-component.component.html',
    styleUrls: ['selected-house-component.component.css']
})
export class SelectedHouseComponentComponent implements OnInit {
    public dataOfHouse: any;
    public flagOfFaves: boolean;

    constructor(
        private router: Router,
        private selected: SelectedHouseService,
        private list: ListFavesService,
        private _location: Location
    ) {
        this.flagOfFaves = true;
    }

    public goBack(): void{
        this._location.back();
    }

    public goHome(): void{
        this.router.navigate(['home-component']);
    }

    public addToFaves(dataOfHouse: any): void{
        this.flagOfFaves = true;
        this.list.setData(dataOfHouse);
    }

    public removeFromFaves(dataOfHouse: any): void {
        this.flagOfFaves = false;
        this.list.deleteElementFromList(dataOfHouse);
    }

    public checkingOfUniq (house: any): void {
        this.flagOfFaves = this.list.chekingOfUniq(house);
    }

    public goToFaves(): void {
        this.router.navigate(['faves-component']);
    }

    ngOnInit(): void {
        this.dataOfHouse = this.selected.getData();
        this.checkingOfUniq(this.dataOfHouse);
    }
}
