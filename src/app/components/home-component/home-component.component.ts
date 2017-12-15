import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ListSearchesService } from "../../services/list-searches.service"
import { DataFromServerService } from "../../services/data-from-server.service";
import { isNullOrUndefined } from "util";


@Component({
    selector: 'app-home-component',
    templateUrl: './home-component.component.html',
    styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
    public textField: string;
    public errMassage: string;
    public recentSearches;


    constructor(private router: Router, public list: ListSearchesService, public data: DataFromServerService) {
    }

    public searchOnMyLocation(): void {
        this.router.navigate(["search-component"]);
    }

    public searchLocation(param: string = "newcastle"): void {
        this.router.navigate(["search-component", param]);
    }

    public goToFaves(): void {
        this.router.navigate(["faves-component"]);
    }

    public goToRecentSearch(searchInform, index): void {
        this.list.removeSearch(index);
        if (searchInform.name === undefined ) {
            this.searchOnMyLocation();
        } else {
            this.searchLocation(searchInform.name);
        }
    }

    ngOnInit(): void {
        this.errMassage = this.data.getErrMassage();
        this.recentSearches = this.list.getListOfSearches();
        if (this.errMassage !== undefined) {
            this.recentSearches = "";
            this.list.clearListOfSearches();
        }
    }
}
