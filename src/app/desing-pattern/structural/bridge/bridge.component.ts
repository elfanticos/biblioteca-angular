import { Component, OnInit } from '@angular/core';
import { Radio } from './models/radio.model';
import { RemoteControlAdvance } from './models/remote-advance.model';
import { RemoteControl } from './models/remote.model';
import { Tv } from './models/tv.model';

@Component({
  selector: 'app-bridge',
  templateUrl: './bridge.component.html',
  styleUrls: ['./bridge.component.css']
})
export class BridgeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const tv = new Tv();
    const remote = new RemoteControl(tv);
    remote.togglePower();

    console.log('tv enabled => ', tv.isEnabled());
    console.log('tv volumen => ', tv.getVolume());
    console.log('tv channel => ', tv.getChannel());

    const radio = new Radio();
    const remote1 = new RemoteControlAdvance(radio);

    remote1.togglePower();
    remote1.volumenUp();
    remote1.channelUp();

    console.log('radio enabled => ', radio.isEnabled());
    console.log('radio volumen => ', radio.getVolume());
    console.log('radio channel => ', radio.getChannel());

  }

}
