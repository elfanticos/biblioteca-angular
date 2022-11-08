import { IDevice } from "./device.interface";

export class RemoteControl {
    protected device: IDevice;
    constructor(device: IDevice) {
        this.device = device;
    }

    togglePower(): void {
        if (this.device.isEnabled()) {
            this.device.disable();
        } else {
            this.device.enable();
        }
    }

    volumenDown(): void {
        this.device.setVolume(this.device.getVolume() - 10);
    }

    volumenUp(): void {
        this.device.setVolume(this.device.getVolume() + 10);
    }

    channelDown(): void {
        this.device.setChannel(this.device.getChannel() - 1);
    }

    channelUp(): void {
        this.device.setChannel(this.device.getChannel() + 1);
    }



}