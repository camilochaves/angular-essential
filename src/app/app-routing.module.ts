import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { NestedCardsComponent } from './components/nested-cards/nested-cards.component';


const routes: Routes = [
  {path:"nested", component: NestedCardsComponent},
  {path:"", component: CardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
