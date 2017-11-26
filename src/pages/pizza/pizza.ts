import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PizzaService } from "../../providers/pizza-service/pizza-service";

@Component({
  selector: 'page-pizza',
  templateUrl: 'pizza.html'
})
export class PizzaPage {
  id: number;
  pizza: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public pizzaService : PizzaService) {
    // Reception de l'objet pizza envoyé de la page home
    this.id = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PizzaDetails');
    this.pizzaService.getById(this.id).then(data => {
      console.log(data);
      this.pizza = data;
    });
  }
}
