import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
 
const App = () => {
  return (
    <div>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    console.log('ServiceWorker registration successful with scope: ', registration.active);
  });
};


export default App;
