import { Component, OnInit } from '@angular/core';
import { CComponent } from './models/component.model';
import { Composite } from './models/composite.model';
import { Leaf } from './models/leaf.model';

@Component({
  selector: 'app-composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.css']
})
export class CompositeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const simple = new Leaf();
    console.log('Client: I\'ve got a simple component:');
    this.clientCode(simple);
    console.log('');

    const tree = new Composite();
    const branch1 = new Composite();
    branch1.add(new Leaf());
    branch1.add(new Leaf());
    const branch2 = new Composite();
    branch2.add(new Leaf());
    tree.add(branch1);
    tree.add(branch2);
    console.log('Client: Now I\'ve got a composite tree:');
    this.clientCode(tree);
    console.log('');
  }

  clientCode(component: CComponent): void {
    console.log(`RESULT: ${component.operation()}`);
  }

}
