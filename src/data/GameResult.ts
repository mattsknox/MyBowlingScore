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
            
            if (frameNumber > 1) //There was a previous frame
            {
                let lastFrame = this.Frames[frameIndex - 1];
                if (lastFrame.IsStrike()
                || lastFrame.IsSpare())
                {
                    score += rawScore;
                }
            }

            if (frameNumber > 2) //There were two previous frames
            {
                let secondToLastFrame = this.Frames[frameIndex - 2];
                if (secondToLastFrame.IsStrike())
                {
                    score += rawScore;
                }
            }
        }

        return score;
    }
}