import { SearchComponentComponent } from "./components/search-component/search-component.component";
import { HomeComponentComponent } from "./components/home-component/home-component.component";
import { SelectedHouseComponentComponent } from './components/selected-house-component/selected-house-component.component';
import { FavesComponentComponent } from './components/faves-component/faves-component.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes =[
    {path: 'search-component', component: SearchComponentComponent},
    {path: 'search-component/:additionalUrl', component: SearchComponentComponent},
    {path: 'selected-house-component', component: SelectedHouseComponentComponent},
    {path: 'faves-component', component: FavesComponentComponent},
    {path: 'home-component', component: HomeComponentComponent},
    {path: '', component: HomeComponentComponent},
];
