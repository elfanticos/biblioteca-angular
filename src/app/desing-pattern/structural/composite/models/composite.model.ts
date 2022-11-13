import { CComponent } from "./component.model";

export class Composite extends CComponent {
    protected children: CComponent [] = [];

    public override add(component: CComponent): void {
        this.children.push(component);
        component.setParent(this);
    }

    public override remove(component: CComponent): void {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
    }

    public override isComposite(): boolean {
        return true;
    }

    public operation(): string {
        const results = [];
        for (const child of this.children) {
            results.push(child.operation());
        }
        return `Branch (${results.join('+')})`;
     }

}