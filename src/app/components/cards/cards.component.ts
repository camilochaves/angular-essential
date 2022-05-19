import { Component, OnInit } from '@angular/core';
import { ICardInterface } from 'src/app/models/IInputInterface';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

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

}
