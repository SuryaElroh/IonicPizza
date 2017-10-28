import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pizza',
  templateUrl: 'pizza.html'
})
export class PizzaPage {
  pizza: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // Reception de l'objet pizza envoyé de la page home
    this.pizza = navParams.data;
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(PizzaPage, {
      item: item
    });
  }
}
