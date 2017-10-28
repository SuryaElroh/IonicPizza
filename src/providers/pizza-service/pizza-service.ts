import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PizzaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PizzaService {

  data : any;
  private readonly url = "http://10.13.2.167:8080/pizza";

  constructor(public http: HttpClient) {
    console.log('Hello PizzaService Provider');
  }

  getAllPizzas() {
    // Si les données ne sont pas déjà chargées
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // Next, we process the data and resolve the promise with the new data.
      this.http.get(this.url)
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
