import { IDevice } from "./device.interface";

export class Radio implements IDevice {
    private _volumen = 0;
    private _channel = 0;
    private _enabled = false;
    isEnabled(): boolean {
        return this._enabled === true;
    }
    enable(): void {
        this._enabled = true;
    }
    disable(): void {
        this._enabled = false;
    }
    getVolume(): number {
        return this._volumen;
    }
    setVolume(value: number): void {
        this._volumen = value <= 0 ? 0 : value;
    }
    getChannel(): number {
        return this._channel;
    }
    setChannel(value: number): void {
        this._channel = value <= 0 ? 0 : value;
    }

}