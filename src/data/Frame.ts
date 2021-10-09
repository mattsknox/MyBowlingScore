export class Frame
{
    FirstThrowResult: number;
    SecondThrowResult: number;
    //For the tenth frame
    ExtraThrowResult: number;
    IsStrike(): boolean {
        if (this.FirstThrowResult == 10) {
            return true;
        }
        else
        {
            return false;
        }
    }
    IsSpare(): boolean {
        if (this.SecondThrowResult != null
            && this.FirstThrowResult < 10
            && this.FirstThrowResult + this.SecondThrowResult == 10) {
                return true;
            }
    }
}