import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ListSearchesService } from "../../services/list-searches.service"
import { isNullOrUndefined } from "util";

@Component({
    selector: 'app-home-component',
    templateUrl: './home-component.component.html',
    styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
    public textField: string;
    public recentSearches;

    constructor(private router: Router, public list: ListSearchesService) {
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
        this.recentSearches = this.list.getListOfSearches();
    }
}
