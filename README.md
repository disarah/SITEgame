# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Sarah Di**

Time spent: **4.5** hours spent in total

Link to project: (https://glitch.com/edit/#!/overjoyed-obsidian-vacuum)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] added in a little funny footer XD
- [x] hovering over the buttons changes the cursor :o

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![https://cdn.glitch.com/d9ae85a7-3194-44b3-ae40-28699aeea133%2Fv1.gif?v=1616563755967](v1.gif)
![https://cdn.glitch.com/d9ae85a7-3194-44b3-ae40-28699aeea133%2Fv2.gif?v=1616563764854](v2.gif)
![https://cdn.glitch.com/d9ae85a7-3194-44b3-ae40-28699aeea133%2Fv3.gif?v=1616563740922](v3.gif)
![https://cdn.glitch.com/d9ae85a7-3194-44b3-ae40-28699aeea133%2Fv4.gif](v4.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I used https://coolors.co/ to help generate the color palette! For additional css tricks, I referenced https://css-tricks.com/, this especially came in handy when figuring out the cursor. I also referenced w3schools documentation on the setInterval() and clearInterval() functions.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it?

I think the biggest challenges I encountered with this website were designing the layout/colors of the website and implementing the timer. I found these particularly tricky because of the freedom I was given with respect to both tasks. For designing the layout, other than the requirements (four buttons, header, paragraph, and start/stop button) I had the freedom to change whatever part of the website I wanted to. This included the header content, the styling of the buttons and html elements, and the theme of the website. For the timer, the only requirement was to create a function so the player has to respond within a certain amount of time. This meant that I was free to determine the particular reset parameters if the player made a mistake, the amount of time used for the timer, and how to display it on the website in a cohesive way. 

Ultimately what helped me to overcome both these difficulties was drawing/writing everything down. I learn best through visuals, so having a plan that I could easily reference helped me remember specific cases (such as clearing the timer after stopping the game or after each clue sequence). Additionally, designing the website layout before jumping immediately to coding the css stylesheet helped me decide which colors, fonts, font sizes, and line art would work well with each other as well as which ones might clash. Since I drew all the line art and designs by myself, curating reference photos and visualizing the end product through this layout was what ultimately solidified the uniform style of the website. 

3. What questions about web development do you have after completing your submission?

After completing this game, I do have some questions about how to dynamically update a website, as well as how to transfer/store information from the website to a larger back-end database. I was also thinking about the differences between this and a webapp, where changes could be made and deployed without the need for hardcoding all changes. I am also interested in ways we could integrate game elements with complex layouts into web applications. These more intricate elements could include wasd or arrow key control or the incorporation of additional technology like the webcam, AR, and VR. Perhaps this could be done by embedding another application into a website? I’m really interested in seeing and pushing the limit of what web development is capable of and am really excited after completing this submission.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific.

I’d really be interested in adding additional features to the game that allow user customization. This would include sliders for picking out specific colors and multiple images the user could select to use as the background or mouse cursor of the website. Additionally I’d want to create an infinite mode, which would be a light memory game with a dynamically increasing sequence. Players would also be able to share their high scores through a leaderboard that is publicly available in a different section of the website. I’d also be interested in incorporating the webcam and AR into this memory game. Instead of using the mousepad to click on squares, the player could use their webcam and motion towards areas in front of them to indicate a selection. 


## License

    Copyright [Sarah Di]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
