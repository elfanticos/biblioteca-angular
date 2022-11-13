export abstract class CComponent {
    protected parent!: CComponent | null;

    public setParent(parent: CComponent | null) {
        this.parent = parent;
    }

    public getParent(): CComponent | null {
        return this.parent;
    }

    public add(component: CComponent): void { }

    public remove(component: CComponent): void { }

    public isComposite(): boolean {
        return false;
    }

    public abstract operation(): string;

}