# Rock Paper Scissors UI Work Breakdown Structure

[ ] Write HTML for page layout
    [ ] Title and Subtitle
    [ ] Scoreboard
        [ ] Human and Computer
        [ ] Scores start at 0
    [ ] Button panel
        [ ] Visible Buttons for ROCK, PAPER, and SCISSORS
        [ ] Invisible button for PLAY AGAIN
    [ ] Game History
[ ] Add styling
    [ ] Large numbers for scoreboard
    [ ] Center content on page
[ ] Write Javascript logic
    [ ] On button click, play round by passing player choice to game
    [ ] On play round
        [ ] Determine winner
        [ ] Update scoreboard
        [ ] Update Game History with round message
        [ ] When someone gets 5 points, the game is over
            [ ] Hide ROCK, PAPER, SCISSORS buttons
            [ ] Make the PLAY AGAIN button visible
    [ ] On PLAY AGAIN
        [ ] Reset the score
        [ ] Reset the game history
        [ ] Make the ROCK, PAPER, and SCISSORS buttons visible
        [ ] Hide the PLAY AGAIN button
