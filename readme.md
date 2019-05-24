# Random Quotes Machine

Simple Vanilla Javascript Project that demonstrate how to use Fetch API request to the server, and manipulate DOM with document.querySelector method.

It's PWA (Progressive Web App) that can add to mobile home screen to run feel like the native mobile app.

## How to deploy on your firebase host?

Create .firebaserc and replace [your project name]

```javascript
{
  "projects": {
    "default": "api-project-1008783682307"
  }
}
```

## How to run locally?
1) Open index.html file directly at src/index.html
2) (Recommended) To prevent security issue and see how ServiceWorker works, you need to run website throught HTTP/HTTPS protocol. Run it on virtual server (easily) using serve package and NPM it will create virtual host and listening on port 5000 by default, so you can access it at http://localhost:5000.

```
npm install -g serve
serve ./src
```

## Demo Application

![Demo App QR Code](qr.png)

## Contributors
Weerayut Teja https://www.github.com/wteja

## Credit
- [App Icon : Iconfinder.com](https://www.iconfinder.com/icons/532245/bubble_cloud_communicate_communication_speech_speech_bubble_icon)
- [Random Famous Quotes API](https://rapidapi.com/andruxnet/api/random-famous-quotes)