import { Component, OnInit } from '@angular/core';
import { DataFromServerService } from "../../services/data-from-server-service/data-from-server.service";
import { Router } from "@angular/router";
import { SelectedHouseService } from "../../services/selected-house-service/selected-house.service"
import { Location } from '@angular/common'


@Component({
    selector: 'app-search-component',
    templateUrl: './search-component.component.html',
    styleUrls: ['./search-component.component.css']
})

export class SearchComponentComponent implements OnInit {

    public dataFromServer: Array <any>;
    public limit: number = 10;
    public btnLoadMoreStatus: boolean = false;

    constructor(public data: DataFromServerService,
                public selected: SelectedHouseService,
                private router: Router,
                private _location: Location
    ) {
    }

    public goBack(): void {
        this._location.back();
    }

    public selectHouse(house): void {
        this.selected.setData(house);
        this.router.navigate(["selected-house-component"]);
    }

    public loadMore(): void {
        if (this.limit + 10 >= this.dataFromServer.length) {
            this.limit = this.dataFromServer.length;
            this.btnLoadMoreStatus = true;
        }
        else {
            this.limit += 10;
        }
    }

    ngOnInit(): void {
        this.dataFromServer = this.data.getDataFromServer();
        this.data.clearErrMassage();
    };
}

