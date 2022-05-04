import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ContextProvider, ContextRecommendProvider} from './ContextApi/Context'


ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <ContextRecommendProvider>
        <App/>
      </ContextRecommendProvider>        
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
