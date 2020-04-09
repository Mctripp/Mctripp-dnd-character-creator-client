#Client for DND character creator

Frontend: https://mctripp.github.io/Mctripp-dnd-character-creator-client/
Backend: https://ga-proj2-dnd-5e-api.herokuapp.com/
API repo: https://github.com/Mctripp/Mctripp-dnd-charactor-creator-api

This app uses an API and a frontend client to store and retrieve character information specific to a user. Originally the objective was to design a random character generator for D&D 5e, but the scope was too big and I decided to simplify many aspects of the project.

#Wireframe

![wireframe](https://github.com/Mctripp/Mctripp-dnd-character-creator-client/blob/master/public/wireframe.jpg)

#User Stories
I want a user to be able to:
- Sign up, in, and out, and change their password
- Create, delete, and edit a character
- See the characters that they own

#Technology

This app utilizes:
- HTML
- JavaScript
- CSS
- Handlebars
- jQuery
- SQL

#Development Process

I realized my initial idea was a little too big once I was drawing out the ERD for a DnD 5e character sheet. I decided it was easier to drop stats since there were so many of them that if I wanted to do it right, it would take longer than a week to finish. I ended up with the aspects of a character used for role playing, or RP; basically the flavor text of a character.

Initially I had: name, alignment, appearance, personality, backstory, EXP, and inspiration. I dropped EXP and inspiration since they were there from my initial idea of including other stats as well, and became meaningless without stats to use.

The process from there was:
- Establish database and define characters resource
- Deploy to heroku

The backend was simple to set up and I moved to the client:
- Setup HTML skeleton
- Add user events, ui, api
- Connect user-related events to their elements and verify functionality
- Add character events, ui, api
- Connect character-related events to their elements and verify functionality
- Swap out HTML for Handlebars where necessary
- CSS and bug cleanup

My debug process for this project was the usual console.log-ing, and tinkering with CSS until it looks right. I'm not sure if it was right to do handlebars after the HTML was setup, but it felt easy enough to scoop out a chunk of code and make it into a handlebars script.

#Unsolved problems

Some things I would have liked to have done:
- Show characters on sign in, show newly created character on create, and remove show characters button
- Remove footer completely or make it more visually consistent
- Snazz up the title, css in general, maybe swap up color scheme
