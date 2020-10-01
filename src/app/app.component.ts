import { Component, OnInit } from '@angular/core';
import { CardService } from './services/card.service';
import { Card } from './models/card';
import { Item } from './models/card';
//import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'pokemontcg';

  card = {} as Card;
  item = {} as Item;

  constructor(private cardService: CardService) {}
  
  ngOnInit() {
    this.getCard();
  }

  getCard() {
    this.cardService.getCard().subscribe((card: Card) => {
      this.card = card;
    });
  }

  getCardByName(name: string) {
    this.cardService.getCardByName(name).subscribe((card: Card) => {
      this.card = card;
    });
  }
}
