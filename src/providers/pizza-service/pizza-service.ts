import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Pizza } from '../../models/pizza';
/*
  Generated class for the PizzaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PizzaService {

  data : any;
  private readonly url = "https://pizza-project-cloned-suryae.c9users.io/pizzas/";

  constructor(public http: HttpClient) {
    console.log('Hello PizzaService Provider');
  }

  getAllPizzas() {
    let rt: Array<Pizza> = new Array<Pizza>();
    return new Promise<Array<Pizza>>(resolve => {
      this.http.get(this.url)
        .subscribe((data:Array<any>) => {
          for (let i=0; i < data.length; i++) {
            rt.push(new Pizza(data[i]['id'], data[i]['name'], data[i]['desc'], data[i]['picture'], data[i]['price']));
          }
          resolve(rt);
        });
    });
  }

  getById(id: number) {
    return new Promise<Pizza>(resolve => {
      this.http.get(this.url + id)
        .subscribe((data:Pizza) => {
          resolve(new Pizza(data['id'], data['name'], data['desc'], data['picture'], data['price'], data['ingredients']))
        });
    });
  }
}
