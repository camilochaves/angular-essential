import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverDirective } from './directives/Hover.directive';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/cardcomponent';
import { CardsComponent } from './components/cards/cards.component';
import { NestedCardsComponent } from './components/nested-cards/nested-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HoverDirective,
    CardsComponent,
    CardComponent,
    NestedCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
