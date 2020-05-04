import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  val1: number;

  val2: number = 5;

  val3: number;

  val4: number = 5;

  val5: number;

  msg: string;

  handleRate(event) {
      this.msg = "You have rated " + event.value;
  }

  handleCancel(event) {
      this.msg = "Rating Cancelled";
  }
  headers=["ID", "Nom","Caractèristique","Durée", "Prix"];
  rows=[
    {
      "ID": 1,
      "Nom":"Appartement",
      "Caractèristique":"f1",
      "Durée":1 ,
      "Prix":10000,
    },
    {
      "ID":2,
      "Nom":"Appartement",
      "Caractèristique":"f1",
      "Durée":2,
      "Prix":20000,
    },
    {
      "ID":3,
      "Nom":"Appartement",
      "Caractèristique":"f1",
      "Durée":3,
      "Prix":30000
    }
  ]
  title = 'wonee';
}
