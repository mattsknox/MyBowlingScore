export class Frame
{
    Throws: number[];
    FrameScore: number;
    IsOpen: boolean;

    //throws: an ordinal array, throws are assigned by array order
    constructor(throws: number[])
    {
        this.Throws = throws;
    }
    
    IsStrike(): boolean {
        let firstThrow = this.Throws[0];
        if (firstThrow == 10) {
            return true;
        }
        else
        {
            return false;
        }
    }

    IsSpare(): boolean {
        let firstThrow = this.Throws[0];
        let secondThrow = this.Throws[1];
        if (firstThrow != null
            && firstThrow < 10
            && firstThrow + secondThrow == 10) {
                return true;
            }
    }

    PinsKnockedDown(): number {
        let firstThrow = this.Throws[0];
        let secondThrow = this.Throws[1];
        return firstThrow + secondThrow;
    }
}
