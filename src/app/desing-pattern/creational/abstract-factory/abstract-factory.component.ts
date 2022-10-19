import { Component, OnInit } from '@angular/core';
import { IGUIFactory } from './models/factorys/gui-factory.model';
import { IosFactory } from './models/factorys/ios/ios-factory.model';
import { WinFactory } from './models/factorys/windows/win-factory.model';
import { OSAplication } from './models/os-aplication.model';

type typeOS = 'WIN' | 'IOS';
@Component({
  selector: 'app-abstract-factory',
  templateUrl: './abstract-factory.component.html',
  styleUrls: ['./abstract-factory.component.css']
})
export class AbstractFactoryComponent implements OnInit {
  typeValue: typeOS = 'WIN';
  constructor() { }

  ngOnInit() {
    let factory: IGUIFactory;
    switch (this.typeValue) {
      case "WIN":
        factory = new WinFactory();
        break;
      case "IOS":
        factory = new IosFactory();
        break;
      default:
        throw new Error("Error type");
    }

    const app = new OSAplication(factory);
    app.createUI();
    app.paint();
  }

}
