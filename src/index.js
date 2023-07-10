import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import  App  from './components/App';
import  store  from './redux/store';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>  
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>  
    </Provider>
</BrowserRouter>    
);