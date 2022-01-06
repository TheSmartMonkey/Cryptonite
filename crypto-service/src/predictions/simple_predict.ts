import { IPrediction, Prediction } from './prediction';

export class SimplePredict extends Prediction {
    getPerdiction(): IPrediction {
        return this.applyToAllTimezone(this.predict);
    }

    private predict(timezone: any): void {
        console.log('DEBUG: ', timezone);
    }
}
