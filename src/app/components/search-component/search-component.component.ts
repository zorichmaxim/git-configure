import { Component, OnInit } from '@angular/core';
import { DataFromServerService } from '../../services/data-from-server-service/data-from-server.service';
import { Router } from '@angular/router';
import { SelectedHouseService } from '../../services/selected-house-service/selected-house.service';
import { Location } from '@angular/common';
import { ListSearchesService } from '../../services/list-searches-service/list-searches.service';
import { Subscription, Observable } from 'rxjs';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import {RedirectionService} from '../../services/redirection-service/redirection.service';



@Component({
    selector: 'app-search-component',
    templateUrl: './search-component.component.html',
    styleUrls: ['./search-component.component.css']
})

export class SearchComponent implements OnInit {

    public dataFromServer: Array <any>;
    public totalResults: number;
    public curResults: number;
    public btnLoadMoreStatus: boolean = false;
    public dataSubscription: Subscription;
    public timerSubscription: Subscription;
    private timerOfGettingData: Observable<number>;
    private flagOfRecivingNewData: any;

    constructor(
        private data: DataFromServerService,
        private selected: SelectedHouseService,
        private listOfSearches: ListSearchesService,
        private router: Router,
        private _location: Location,
        private redirectionService: RedirectionService,
    ) {}


    ngOnInit(): void {
        this.setBtnLoadMoreStatus();
        this.fixDataState();
        this.totalResults = this.listOfSearches.getLastSearch().result;
        this.data.clearErrMassage();
    }

    public goBack(): void {
        this._location.back();
    }

    public goToFaves(): void {
        this.redirectionService.redirectToFaves();
    }

    public selectHouse(house): void {
        this.selected.setData(house);
        this.redirectionService.redirectToSelectedHouse();
    }

    private setBtnLoadMoreStatus(): void {
        this.btnLoadMoreStatus = this.data.getDataFromServer().length === this.listOfSearches.getLastSearch().result;
    }

    public loadMore(): void {
        this.listOfSearches.getLastSearch().curPage++;
        this.btnLoadMoreStatus = true;
        const {unformatedUrl, curPage} = this.listOfSearches.getLastSearch();
        console.log(unformatedUrl, curPage);
        this.dataSubscription = this.data.makeRequestForData(unformatedUrl, curPage).subscribe((data, {response: { listings }} = data) => {
            console.log(data);
            this.data.setDataFromServer(listings);
            this.fixDataState();
            this.setBtnLoadMoreStatus();
            this.timerSubscription.unsubscribe();
            this.dataSubscription.unsubscribe();
        });

        this.timerOfGettingData = TimerObservable.create(5000);
        this.timerSubscription = this.timerOfGettingData.subscribe(() => {
            this.dataSubscription.unsubscribe();
            if (!this.flagOfRecivingNewData) {
                this.data.setErrMassage('999');
                this.redirectionService.redirectToHome();
            }
            this.timerSubscription.unsubscribe();
        });
    }

    private fixDataState(): void {
        this.dataFromServer = this.data.getDataFromServer();
        this.curResults = this.dataFromServer.length;
    }
}

