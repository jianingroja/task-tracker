## build/deploy

**build for github pages**

```
npm install --save-dev gh-pages
npm run build
npm run deploy
```

**build for production**

```
npm run build
npm i -g serve
serve -s build -p 8000
```

(This page is using the production build of React.)

[Link](http://localhost:8000)
