import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { PizzaService } from "../../providers/pizza-service/pizza-service";
import { PizzaPage } from "../pizza/pizza";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pizzas: any;
  pizzaPage: any;

  constructor(public navCtrl: NavController,
    public pizzaService : PizzaService) {
    this.pizzaPage = PizzaPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.pizzaService.getAllPizzas().then(data => {
      console.log(data);
      this.pizzas = data;
    });
  }
}
