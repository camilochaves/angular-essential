import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators'

//Local Models
import { ICardInterface } from '../models/IInputInterface';


@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(private http: HttpClient) { }

  GetCardsFromMemory():Array<ICardInterface>{
    return [
      {
        name: "App1",
        prop1: "Element 1 Prop 1",
        prop2: "Element 1 Prop 1",
        showParameters: true,
        isFavourite: true
      },
      {
        name: "App2",
        prop1: "Element 2 Prop 2",
        prop2: "Element 2 Prop 2",
        showParameters: true,
        isFavourite: true
      }
    ];
  } 

  GetCardsFromAPI(){
    let url = "https://my.api.mockaroo.com/Cards?key=69bb7b40";
    return this.http.get<Array<ICardInterface>>(url)
            .pipe(tap(response => console.log(response)));
  }

}
