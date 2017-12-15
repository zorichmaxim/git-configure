import { Component, OnInit } from '@angular/core';
import { DataFromServerService } from "../../services/data-from-server.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { SelectedHouseService } from "../../services/selected-house.service"
import { ListSearchesService } from "../../services/list-searches.service"


@Component({
    selector: 'app-search-component',
    templateUrl: './search-component.component.html',
    styleUrls: ['./search-component.component.css']
})

export class SearchComponentComponent implements OnInit {

    public additionalUrl: string;
    public dataFromServer: Array <any>;
    public limit: number = 10;
    public btnLoadMoreStatus: boolean = false;
    public search = {
        name: " ",
        result: 0
    };

    constructor(public data: DataFromServerService,
                public list: ListSearchesService,
                public selected: SelectedHouseService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
        this.additionalUrl = activatedRoute.snapshot.params['additionalUrl'];
    }

    public goBack(): void {
        window.history.back();
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
        this.data.clearErrMassage();
        this.data.getData(this.additionalUrl).subscribe((data) => {
            console.log(data);
            this.data.setErrMassage(data.response.application_response_code, data);
            if(this.data.getErrMassage()!){
                this.router.navigate(["home-component"]);
            }
            this.dataFromServer = data.response.listings;
            this.search.name = this.additionalUrl;
            this.search.result = this.dataFromServer.length;
            this.list.setSearch(this.search);
            console.log(this.search);
        });
        setTimeout(() => {
            if (this.dataFromServer === undefined) {
                this.data.setErrMassage("999");
                this.router.navigate(["home-component"]);
            }
        }, 5000);
    };
}

