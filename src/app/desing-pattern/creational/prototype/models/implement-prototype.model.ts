import { IPrototype } from "./prototype.interface";

export class ImplementPrototype implements IPrototype {
    public field: number[];

    constructor(field: number []) {
        this.field = field;
    }

    clone(): this {
        // return Object.assign({}, this);
        // return JSON.parse(JSON.stringify(this));
        const c = Object.create(this);
        c.filed = [...this.field];

        return c;
    }

}