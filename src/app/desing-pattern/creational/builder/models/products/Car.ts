export class Car {
    private _hasGps: boolean = false;
    private _seats: number = 0;
    private _hasEngine: boolean = false;
    private _hasTripComputer: boolean = false;
    
    public get hasGps() : boolean {
        return this._hasGps;
    }

    public set hasGps(v : boolean) {
        this._hasGps = v;
    }

    public get seats() : number {
        return this._seats;
    }
    
    public set seats(v : number) {
        this._seats = v;
    }

    public get hasEngine() : boolean {
        return this._hasEngine;
    }

    public set hasEngine(v : boolean) {
        this._hasEngine = v;
    }
    
    public get hasTripComputer() : boolean {
        return this._hasTripComputer;
    }
    
    public set hasTripComputer(v : boolean) {
        this._hasTripComputer = v;
    }
    
}