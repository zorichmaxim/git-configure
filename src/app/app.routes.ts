import { SearchComponent } from "./components/search-component/search-component.component";
import { HomeComponent } from "./components/home-component/home-component.component";
import { SelectedHouseComponentComponent } from './components/selected-house-component/selected-house-component.component';
import { FavesComponent } from './components/faves-component/faves-component.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {path: 'search-component', component: SearchComponent},
    {path: 'search-component/:additionalUrl', component: SearchComponent},
    {path: 'selected-house-component', component: SelectedHouseComponentComponent},
    {path: 'faves-component', component: FavesComponent},
    {path: 'home-component', component: HomeComponent},
    {path: '', component: HomeComponent},
];
