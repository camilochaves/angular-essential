import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICardInterface } from '../models/IInputInterface';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  @Input() inputParameter!: ICardInterface;
  @Output() outputParameter: EventEmitter<string> = new EventEmitter();
  @Input() set Favourite(value: boolean) { this.isFavourite = value; }

  isFavourite = false;

  timesClicked: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  OnClick() {
    this.timesClicked++;
    this.outputParameter.emit(this.inputParameter.name);
  }

}
