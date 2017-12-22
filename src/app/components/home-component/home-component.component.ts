import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ListSearchesService } from "../../services/list-searches-service/list-searches.service"
import { DataFromServerService } from "../../services/data-from-server-service/data-from-server.service";
import { Subscription } from 'rxjs/Subscription';
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { Observable } from "rxjs";

@Component({
    selector: 'app-home-component',
    templateUrl: './home-component.component.html',
    styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
    public textField: string;
    public errMassage: string;
    public timerSubscription: Subscription;
    private timerOfGettingData: Observable<number>;
    public isSearchInProgress: boolean;
    public recentSearches = [];
    public coords: string;
    private dataSubscription: Subscription;
    public search = {
        name: " ",
        result: 0
    };

    constructor(private router: Router, public list: ListSearchesService, public data: DataFromServerService) {
    }

    public get isNoRecentSearches() {
        return this.recentSearches.length === 0 && this.errMassage === undefined;
    }

    public searchOnMyLocation(): void {
        this.makeRequest(this.coords);
    }

    public searchLocation(param: string = "newcastle"): void {
        param = param.trim();
        if (param == "") {
            param = "newcastle"
        }
        param = "place_name=" + param;
        this.makeRequest(param);
    }

    public goToFaves(): void {
        this.router.navigate(["faves-component"]);
    }

    public goToRecentSearch(searchInform, index): void {
        this.list.removeSearch(index);
        if (searchInform.name === "My Location") {
            this.searchOnMyLocation();
        } else {
            this.searchLocation(searchInform.name);
        }
    }

    private configSearchObj(addUrl: string, data: any): void {
        addUrl.search(/centre_point=/i) !== -1 ? this.search.name = "My Location" : this.search.name = addUrl.slice(11);
        this.search.result = data.response.listings.length;
    }

    private configOfData(data: any, addUrl: string): void {
        this.data.setDataFromServer(data);
        this.data.setErrMassage(data.response.application_response_code, data);
        this.configSearchObj(addUrl, data);
        this.list.setSearch(this.search);
    }

    public goToErrorStatement() {
        this.errMassage = this.data.getErrMassage();
        this.list.clearListOfSearches();
        this.recentSearches = [];
        this.textField = undefined;
        this.isSearchInProgress = true;
    }

    public setCurrentCoords(): void {
        navigator.geolocation.getCurrentPosition((pos) => {
            this.coords = `centre_point=${pos.coords.latitude},${pos.coords.longitude}`
            //this.coords = "centre_point=51.684183,-3.431481" //for testing My Location Button
        });
    }

    public makeRequest(addUrl?: string) {
        this.isSearchInProgress = false;
        this.data.clearErrMassage();
        this.dataSubscription = this.data.makeRequestForData(addUrl).subscribe((data) => {
            this.timerSubscription.unsubscribe();
            this.configOfData(data, addUrl);

            if (!this.data.getErrMassage()) {
                this.router.navigate(["search-component"]);
            } else {
                this.goToErrorStatement()
            }
        });

        this.timerOfGettingData = TimerObservable.create(5000);
        this.timerSubscription = this.timerOfGettingData.subscribe(() => {
            this.dataSubscription.unsubscribe();
            if (this.data.getDataFromServer() === undefined) {
                this.data.setErrMassage("999");
                this.goToErrorStatement();
            }
            this.timerSubscription.unsubscribe();
        });
    }

    ngOnInit(): void {
        this.isSearchInProgress = true;
        this.setCurrentCoords();
        this.recentSearches = this.list.getListOfSearches();
        this.data.calearData();
    }
}
