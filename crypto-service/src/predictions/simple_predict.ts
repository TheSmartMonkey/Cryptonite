import { IOHLC } from './../models/cryptowatcher_model';
import { EOHLC } from './../models/prediction_model';
import { IPrediction, Prediction } from './prediction';

export class SimplePredict extends Prediction {
    constructor(ohlc: IOHLC) {
        super(ohlc);
    }

    getPerdiction(): IPrediction {
        return {
            60: this.predict('60'),
            900: this.predict('900'),
            3600: this.predict('3600'),
            14400: this.predict('14400'),
            86400: this.predict('86400'),
            604800: this.predict('604800')
        };
    }

    private predict(timezone: string): any {
        const data = this.getTimezoneData(timezone);
        const hundred = data.slice(-100);
        const trendMessage = this.getTrend(hundred);
        return this.createPrediction(trendMessage);
    }

    /**
     * Count every data in a timezone to predict a tendance
     * @param data Timezone data
     * @returns string that represente the trend
     */
    private getTrend(data: number[][]): string {
        let count = 0;
        data.forEach(price => {
            if (this.isPriceGoingUp(price[EOHLC.OpenPrice], price[EOHLC.ClosePrice])) count++;
        });
        return this.trendToString(count);
    }

    private trendToString(count: number): string {
        switch (true) {
            case count >= 55:
                return 'up';
            case (45 < count &&  count < 55):
                return 'constant';
            case count <= 45:
                return 'down';
            default:
                throw new Error(`SimplePredict value count of ${count} is in any indicator range`);
        }
    }

    /**
     * Generate fake data based on trend
     * @param priceCallback 
     * @returns fake data
     */
    private generateFakeData(fakeTrend: number[]): number[][] {
        const data = [] as number[][];
        fakeTrend.forEach(increment => {
            const i = Math.round(this.currentPrice) + increment;
            data.unshift([
                0, 
                i, 
                i, 
                i, 
                i, 
                0
            ]);
        });
        return data;
    }

    private timestampFakeData(): any {
        return;
    }

    private createPrediction(trendMessage: string): number[][] {
        const scope = 10;
        let fakeTrend = Array(scope).fill(1);
        if (trendMessage === 'up') {
            fakeTrend = Array.from({length: scope}, (_, i) => i + 1);
        } else if (trendMessage === 'down') {
            fakeTrend = Array.from({length: scope}, (_, i) => i + 1).reverse();
        }
        return this.generateFakeData(fakeTrend);
    }
}
