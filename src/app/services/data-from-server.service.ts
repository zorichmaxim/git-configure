import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, Jsonp } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DataFromServerService {

  constructor(private http: HttpClient, private jsonp: Jsonp){}

  public baseUrl = 'http://api.nestoria.co.uk/api?country=uk&pretty=1&encoding=json&listing_type=buy&page=1&callback=JSONP_CALLBACK&action=search_listings&';

  public getData(addLocation: string = 'centre_point=51.684183,-3.431481') {
    addLocation === 'centre_point=51.684183,-3.431481' ? addLocation = 'centre_point=51.684183,-3.431481' : addLocation = "place_name=" + addLocation;
    return this.jsonp.request(this.baseUrl+addLocation, {method: 'GET'}).map((res: Response) => res.json());
  }
}
