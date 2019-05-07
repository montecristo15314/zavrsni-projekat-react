# Mushrooms database
## React.js project

For launching application successfully in both ``(after positioning with ``     	<b>cd</b>  `` command in terminal properly)`` **Node-Server** and **React-app** user need first to install *node-modules* with:

```npm install```

For that task, 2 running terminals are required.
After installing, once again in **both** open terminals user should start:

``npm run start``

**node-server** will start back-end, while **react-app** will start front-end app in default browser ``(chrome/mozilla/safari recommended)``.

## What tasks app provide:
App allow user to put new object on page after successfully filling and submiting form called ``Add new mushroom``. After adding new mushroom, user should reload page, F5 or click reload, so server can compile and render new object placing it on page.

2nd user interaction with page is ``read more...`` about some specific mushroom, modal will pop up with all properties for that mushroom, ``description, image, edibility`` while on page is shown only ``Common name and Latin name (a.k.a. scientific name)``
### Techonologies used in project:
<h3>React.js, Express.js, Axios, CSS</h3>

## Structure of project should look like this:

Project:
```
-- Node-Server
    |   -index.js
    |  -node-persist

-- React-App
    |    -- public
    |            - favicon.ico
    |            - index.html
    |            - manifest.json
    |    -- src
    |        - components
    |            - FooterComponent.js
    |            - HeaderComponent.js
    |            - ListOfMushroomsComponents.js
    |            - MainPage.js
    |            - MushroomDetailsComponents.js
    |            - NewMushroomComponents.js
    |        - config
    |            - index.js
    |        - css 
    |        - services 
    |            - HttpService.js
    |            - MushroomService.js
    |    - App.js
    |    - App.css   
-- README.md
        
```