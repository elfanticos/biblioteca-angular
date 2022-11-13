import EnemyDecorator from "../enemy-decorator.model";

export class HelmetDecorator extends EnemyDecorator {
    override takeDamage(): number {
        return this.enemy.takeDamage() / 2;
    }
}