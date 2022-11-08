export class Singleton {
    private static instance: Singleton;
    private _value: string | undefined;
    private constructor(){}

    public static getInstance():Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    get value() {
        return this._value;
    }
    
    set value(v: string | undefined) {
        this._value = v;
    }
}