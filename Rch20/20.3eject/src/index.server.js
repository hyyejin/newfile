import React from 'react';
import {createRoot} from 'react-dom/server';

const root =  createRoot(document.getElementById("root"));

const html = rootServer.renderToString(
  <div>Hello Server Side Rendering!</div>
);

console.log(html);