# MemoGlue
What if we could have an app that logged all of our connections & invitations without the limitations and social media aspects of Linkedin? MemoGlue is an experiment to create a native mobile application & companion web application to explore new, more efficient ways to maintain our social circles in a true 21st century user interface.

Currently just building this as an experiment but am extremely interested in turning this into a product that can bring in revenue.

# Tech stack
## Frontend (web)
* React
* Typescript
* `package.json`

## Frontend (native mobile)
* React native

## Backend
* Google Firebase -> DB for user notes & user settings
* Moralis -> handles authentication & user logs

## Project structure
Note: the client and server folders are not yet configured correctly with node scripts, so currently the root directory only contains the webapp (not the server)
### `src` folder

#### utils
Config.js -> stores the configuration files for the Firebase server, as well as our Moralis instance

## Project status
Currently we have two separate react "pages" (mini react x2) -> a notes app like google keep, and a contacts app. The logic behind both is the same (they both talk to the same backend(s)), they just have a different style of rendering the content to the frontend.

# Contributors
* [Liam Arbuckle](https://la7.dev) -> Engineering maintainer
* Josephine Tay -> Design consultant, market strategy