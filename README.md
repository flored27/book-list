## Build Instructions:

Install React with npm:
npm install react react-dom registerServiceWorker --save-dev

Open to the folder containing book-display

Start running local server with:
npm start
It runs on localhost:3000, but if that port is already being used,
simply type 'y' to go to another port.

## Frameworks/Libraries

I used React, which is a JS Library, in order to build this app. I really like
the way React uses components to organize the code, as well as splitting up
a functional component into a container, and a component which is only used to
display the information into a presentational component. This helps when debugging,
and you can reuse the components as well.

You can see this clearly in how the directories are organized. The stylesheets are also
seperate in another folder (styles). I also like how the containers can pass down
information, in this case the book list and author information, to their child
presentational components.

-------------------------------------

For styling, I used Bootstrap and Google Fonts. I didn't use the React-Bootstrap
framework, as I don't think it's robust enough yet to use without worry or complications.
Instead, I simply pasted the CSS and JS stylesheets and scripts into the public/index.html.

I also changed the favicon.ico and title in order to reflect the web app's purpose.
