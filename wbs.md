# Rock Paper Scissors UI Work Breakdown Structure

[ ] Write HTML for page layout
    [x] Title and Subtitle
    [x] Scoreboard
        [x] Human and Computer
        [x] Scores start at 0
    [x] Button panel
        [x] Buttons for ROCK, PAPER, and SCISSORS
    [ ] Game History
[ ] Add styling
    [ ] Large numbers for scoreboard
    [ ] Center content on page
    [ ] Amber glow text color
    [ ] Black background
    [ ] Amber glow button border color
    [ ] Round button corners
    [ ] Monospaced font
[ ] Write Javascript logic
    [ ] On button click, play round by passing player choice to game
    [ ] On play round
        [ ] Determine winner
        [ ] Update scoreboard
        [ ] Update Game History with round message
        [ ] When someone gets 5 points, the game is over
            [ ] Remove ROCK, PAPER, SCISSORS buttons
            [ ] Add the PLAY AGAIN button
    [ ] On PLAY AGAIN
        [ ] Reset the score
        [ ] Reset the game history
        [ ] Add the ROCK, PAPER, and SCISSORS buttons
        [ ] Remove the PLAY AGAIN button
