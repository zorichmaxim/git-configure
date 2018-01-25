import { Component, OnInit } from '@angular/core';
import { ListFavesService } from '../../services/list-faves-service/list-faves.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {RedirectionService} from '../../services/redirection-service/redirection.service';

@Component({
    selector: 'app-faves-component',
    templateUrl: 'faves-component.component.html',
    styleUrls: ['faves-component.component.css']
})
export class FavesComponent implements OnInit {
    public listOfFaves: Array<any>;

    constructor(private listFavesService: ListFavesService,
                private _location: Location,
                private router: Router,
                private redirectionService: RedirectionService,
    ) {}

    ngOnInit() {
        this.listOfFaves = this.listFavesService.getData();
    }

    public goBack(): void {
        this._location.back();
    }

    public goHome(): void {
        this.redirectionService.redirectToHome();
    }

    public removeFromFaves(house: any): void {
        this.listFavesService.deleteElementFromList(house);
    }
}
