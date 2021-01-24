## build for github pages

```
npm install --save-dev gh-pages
npm run build
npm run deploy
```

## build for production

```
npm run build
npm i -g serve
serve -s build -p 8000
```

(This page is using the production build of React.)

[Link](http://localhost:8000)

## json server

mock back-end service

1. install

```
npm i json-server
```

2. write data in db.json, otherwise one would be automatically generated

3. edit package.json script

   "server": "json-server --watch db.json --port 5000"

4. data is displayed at http://localhost:5000/tasks after:

```
npm run server
```
