# Overview

My goal in making this program was to learn how to make a database with Google Firebase's Realtime Database feature.
I plan to continue working on this project for a few more weeks, but as for now the frontend contains simple HTML, Javascript, and CSS files to demonstrate that I have built a database in Firebase and can read information from it. The database contains information about the busses that are run by the apartment complex I live in. I hope to be able to work on the frontend more in the next few weeks to be able to have a useful user interface that my fellow residents and I can use to see when and where the busses will be at any given time.

[Software Demo Video](https://youtu.be/NYZEVR-9-ro)

# Cloud Database

I created a database in the cloud using Google Firebase's "Realtime Database" feature.
This database acts almost like a mega dictionary, meaning it is just a few key:value pairs for each bus route.
The structure on a high level is that there is a database with bus routes. Each route has an index (0-256) and each index is connected to several key:value pairs (for "bus_line", "departure_location", "destination_location", "est_departure", and for some "days_running"), which contain values that describe 1 stop of a bus (An example of the type of information it holds: The Green bus is leaving at 11:20 from the Snow building to the Smith building).

# Development Environment

- Google Firebase 10.4.0 - Realtime Database
- Visual Studio Code
- node/npm (to implement the database)
- HTML
- Javascript
- CSS

# Useful Websites

- [Database (firebase realtime databases)](https://console.firebase.google.com/project/uvbusschedule/database/uvbusschedule-default-rtdb/data/~2F)

- [how to connect js to html (w3schools)](https://www.w3schools.com/tags/att_script_src.asp)
- [connecting css to html (simplilearn)](https://www.simplilearn.com/tutorials/html-tutorial/link-css-files-to-html#:~:text=To%20link%20the%20CSS%20to,like%20the%20image%20displayed%20below%3A&text=Let's%20look%20at%20another%20example,the%20CSS%20and%20HTML%20files.)
- [defer (w3schools)](https://www.w3schools.com/tags/att_script_defer.asp#:~:text=The%20defer%20attribute%20is%20a,the%20src%20attribute%20is%20present.)
- [connect firebase to js (npm repository)](https://www.npmjs.com/package/firebase)
- [reading and writing to and from firebase realtime db (firebase docs)](https://firebase.google.com/docs/database/web/read-and-write)
- [import as module (stackoverflow)](https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import)
- [forEach js (developer.mozilla)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

# Future Work

- Make functions in Javascript to add and delete the right values from a list of all the different bus routes that are shown
- Add different selectors (dropdowns, toggles, etc.) that the user can use to "Query" the database with different stipulations
- CSS (beautify!)
