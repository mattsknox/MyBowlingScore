import { Frame } from './Frame';

export class BowlingGame {
    Frames: Frame[];
    GameplayDate: Date;
    TotalScore: number;

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
            if (currentFrame.IsStrike() && currentFrame.Throws.length < 2 && frameNumber != 10) {
                currentFrame.Throws.push(null);
            }

            let rawScore = currentFrame.PinsKnockedDown();
            score += rawScore;
            currentFrame.FrameScore = rawScore;
            if (currentFrame.IsStrike() || currentFrame.IsSpare()) {
                currentFrame.IsOpen = true;
            }
            else if (currentFrame.Throws.length == 2) {
                currentFrame.IsOpen = false;
            }
            if (frameNumber > 1) //There was a previous frame
            {
                let lastFrame = this.Frames[frameIndex - 1];
                let lastThrow;
                if (currentFrame.Throws.length > 0) {
                    lastThrow = currentFrame.Throws[0];
                } else if (!lastFrame.IsStrike()){
                    lastThrow = lastFrame.Throws[1];
                } else {
                    lastThrow = lastFrame.Throws[0];
                }

                if (!!lastFrame.IsOpen) {
                    lastFrame.FrameScore += lastThrow;
                    score += lastThrow;
                    if (lastFrame.IsSpare()) {
                        lastFrame.IsOpen = false;
                    }
                    else if (currentFrame.Throws.length > 1 && !currentFrame.IsStrike()) {
                        lastFrame.IsOpen = false;
                    }
                }
                
                
                if (frameNumber > 2) { 
                    let secondToLastFrame = this.Frames[frameIndex - 2];
                    if (secondToLastFrame.IsOpen) {
                        secondToLastFrame.FrameScore += lastThrow;
                        score += lastThrow;
                        secondToLastFrame.IsOpen = false;
                    }
                }
                if (frameNumber == 10
                    && (currentFrame.IsSpare() || currentFrame.IsStrike())) {
                        if (currentFrame.Throws.length == 2) {
                            let points = currentFrame.Throws[1];
                            if (!!lastFrame.IsOpen) {
                                lastFrame.FrameScore += points;
                                score += points;
                                lastFrame.IsOpen = false;
                            }
                        }
                        else if (currentFrame.Throws.length == 3) {
                            let points = currentFrame.Throws[2];
                            score += points;
                            currentFrame.FrameScore += points;            
                            currentFrame.IsOpen = false;
                            
                            if (!!lastFrame.IsOpen) {
                                lastFrame.FrameScore += points;
                                score += points;
                                lastFrame.IsOpen = false;
                            }
                        }
                    }
            }

            if (frameNumber == 10
                && currentFrame.Throws.length > 1
                && !currentFrame.IsSpare()
                && !currentFrame.IsStrike()) {
                    currentFrame.IsOpen = false;

            }
            
        }
        this.TotalScore = score;
        return score;
    }

    SaveThrow(pinsKnockedDown: number): void {
        
        if (this.Frames.length < 1) {
            this.Frames.push(new Frame([pinsKnockedDown]));
        }
        else {
            let frame = this.Frames[this.Frames.length - 1];
            if (frame.Throws.length < 2
                && this.Frames.length < 10) {
                frame.Throws.push(pinsKnockedDown);
            }
            else if (this.Frames.length == 10
                && frame.Throws.length < 3){
                frame.Throws.push(pinsKnockedDown);
            }
            else {
                this.Frames.push(new Frame([pinsKnockedDown]));
            }
        }

    }
}