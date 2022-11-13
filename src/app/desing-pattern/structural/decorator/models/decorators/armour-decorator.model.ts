import EnemyDecorator from "../enemy-decorator.model";

export class ArmourDecorator extends EnemyDecorator {
    override takeDamage(): number {
        return this.enemy.takeDamage() / 1.5;
    }
}