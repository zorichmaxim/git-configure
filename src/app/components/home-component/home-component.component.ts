import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ListSearchesService } from "../../services/list-searches.service"

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

    ngOnInit(): void {
        this.recentSearches = this.list.getListOfSearches();
    }
}
