import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import * as path from 'path';
import * as fs from 'fs';

import App from './App';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  const reactContent = ReactDOMServer.renderToString(<App />);

  const indexFile = path.resolve(__dirname, './index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${reactContent}</div>`),
    );
  });
});

app.use(express.static('./dist'));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${PORT}`);
});
