# MyBowlingScore

This is my answer to the Bowling Game exercise, the objective of which was to create a page capable of parsing a complete game of bowling.  I used my most recent latest Angular project as reference while I knocked off the dust; it's been a couple years, but most of it was starting to come back to me.

I believe my first pass at a method capable of simply parsing a complete game is available on commit d74a0714eaf2b7fbee9555899cfa0c2bd76ced2c 

I used the spec test to ensure the scoring algorithm kept working.  It was broken for a few commits.

Here's the text of the method from the source control history, for convenience:
```
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
```

Once I saw a good result on the scoring algorithm, I starting building it out as a page that could keep score as you bowled.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
