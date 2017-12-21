import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, Jsonp } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DataFromServerService {
    private errMassage: string;
    public arrCodeStatus: Array<string> = ["100", "101", "102", "200", "202"];
    public dataFromServer: Array <any>;
    constructor(private http: HttpClient, private jsonp: Jsonp) {
    }

    public baseUrl = 'http://api.nestoria.co.uk/api?country=uk&pretty=1&encoding=json&listing_type=buy&page=1&callback=JSONP_CALLBACK&action=search_listings&';

    public makeRequestForData(addLocation: string) {
        return this.jsonp.request(this.baseUrl + addLocation, {method: 'GET'}).map((res: Response) => res.json());
    }

    public setDataFromServer(data?): void{
        this.dataFromServer = data.response.listings;
    }

    public getDataFromServer(): Array<any> {
        return this.dataFromServer;
    }

    public setErrMassage(codeStatus: string = "", data?): void {
        if (this.arrCodeStatus.indexOf(codeStatus) !== -1) {
            if (data.response.listings.length === 0) {
                this.errMassage = "There were no properties found for the given location."
            }
        } else {
            if(codeStatus === "999") {
                this.errMassage = "An error occurred while searching. Please check your network connection and try again.";
            }
        }
    }

    public getErrMassage(): string{
        return this.errMassage;
    }

    public clearErrMassage(): void{
        this.errMassage = undefined;
    }

    public calearData(): void{
        this.dataFromServer = undefined;
    }
}
