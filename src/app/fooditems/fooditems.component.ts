import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Items } from '../items';

@Component({
  selector: 'app-fooditems',
  templateUrl: './fooditems.component.html',
  styleUrls: ['./fooditems.component.css']
})
export class FooditemsComponent implements OnInit {
  url = `https://digitebl-staging.herokuapp.com/api/v1/common/getItemCategories`;
  Items: Items[];
  searchValue: string ='';
  searchOther: string ='';
  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((result: Items[]) => {
      this.Items = result;
    });
  }

}
