import { Component, OnInit } from '@angular/core';
import { RoadLogistic } from './models/factorys/road/road-logistic.model';
import { SeaLogistic } from './models/factorys/sea/sea-logistic.model';

@Component({
  selector: 'app-method-factory',
  templateUrl: './method-factory.component.html',
  styleUrls: ['./method-factory.component.css']
})
export class MethodFactoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const logistic = new LogisticFactory('road');
    // const logistic1 = logistic.createLogistic();
    // logistic1.planDelivery();

    const roadLogistic = new RoadLogistic();
    roadLogistic.planDelivery();

    const seaLogistic = new SeaLogistic();
    seaLogistic.planDelivery();
  }

}
