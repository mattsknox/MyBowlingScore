import { Frame } from './Frame';

export class GameResult {
    Frames: Frame[];
    GameplayDate: Date;

    constructor(frames: Frame[], gameplayDate: Date) {
        this.Frames = frames;
        this.GameplayDate = gameplayDate;
    }


    Score(): number {
        let score: number = 0;

        for( let frameIndex = 0; frameIndex < this.Frames.length; frameIndex++ )
        {
            let frameNumber = frameIndex + 1;
            let currentFrame = this.Frames[frameIndex];

            let rawScore = currentFrame.PinsKnockedDown();
            score += rawScore;
            currentFrame.FrameScore = rawScore;
            currentFrame.IsOpen == currentFrame.IsStrike() || currentFrame.IsSpare();
            if (frameNumber > 1) //There was a previous frame
            {
                let lastFrame = this.Frames[frameIndex - 1];

                if (lastFrame.IsSpare()) {
                    let points = currentFrame.Throws[0];
                    score += points;
                    lastFrame.FrameScore += points;
                    lastFrame.IsOpen = false;
                }
                
                if (lastFrame.IsStrike()) {
                    lastFrame.FrameScore += currentFrame.Throws[0];
                    if (!currentFrame.IsStrike()
                        && currentFrame.Throws.length > 1) {
                        let points = currentFrame.Throws[1]
                        score += points;
                        lastFrame.FrameScore += points;
                        lastFrame.IsOpen = false;
                    }
                }
                
                if (frameNumber > 2) { //There were two previous frames
                    let secondToLastFrame = this.Frames[frameIndex - 2];
                    if (lastFrame.IsStrike() && secondToLastFrame.IsStrike())
                    {
                        score += rawScore;
                        secondToLastFrame.FrameScore += rawScore;
                        secondToLastFrame.IsOpen = false;
                    }
                }
            }

            if (frameNumber == 10
                && (currentFrame.IsStrike() || currentFrame.IsSpare())
                && currentFrame.Throws.length > 2) {
                    let points = currentFrame.Throws[2];
                    score += points;
                    currentFrame.FrameScore += points;            }
            
        }

        return score;
    }
}