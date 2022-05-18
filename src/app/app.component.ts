import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICardInterface } from './models/IInputInterface';
import { DataProviderService } from './services/data-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  service!: Observable<Array<ICardInterface>>;
  title = 'Demonstrando Angular Essential';
  lastElementClicked = "";
  items: Array<ICardInterface> = [];

  constructor(private dataService: DataProviderService) {

  }

  ngOnInit(): void {
    this.dataService.GetCardsFromAPI().subscribe(values => this.items = values);
  }

  ngOnDestroy(): void {
  }

  OnEventActivated(name: string): void {
    this.lastElementClicked = name;
  }
}
