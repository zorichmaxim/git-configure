import { Component, OnInit } from '@angular/core';
import { ListFavesService} from "../../services/list-faves.service"

@Component({
  selector: 'app-faves-component',
  templateUrl: 'faves-component.component.html',
  styleUrls: ['faves-component.component.css']
})
export class FavesComponentComponent implements OnInit {
    public listOfFaves;

  constructor(public list: ListFavesService) { }

  public goBack(): void {
        window.history.back();
  }
  public removeFromFaves(pos): void {
      this.listOfFaves.splice(pos,1);
  }

  ngOnInit() {
      this.listOfFaves = this.list.getData();
  }

}
