import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule, Jsonp, Response} from '@angular/http';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponentComponent } from "./components/search-component/search-component.component";
import { HomeComponentComponent } from "./components/home-component/home-component.component";
import { SelectedHouseComponentComponent } from './components/selected-house-component/selected-house-component.component';
import { FavesComponentComponent } from './components/faves-component/faves-component.component';
import { SelectedHouseService } from "./services/selected-house-service/selected-house.service";
import { DataFromServerService } from "./services/data-from-server-service/data-from-server.service";
import { ListFavesService } from "./services/list-faves-service/list-faves.service";
import { ListSearchesService } from "./services/list-searches-service/list-searches.service";
import { appRoutes } from "./app.routes"


@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    HomeComponentComponent,
    SelectedHouseComponentComponent,
    FavesComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    JsonpModule
  ],
  providers: [DataFromServerService,SelectedHouseService,ListFavesService,ListSearchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
