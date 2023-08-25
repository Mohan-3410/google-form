// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './components/store/StateProvider';
import reducer, {initialState} from './components/store/reducer';

ReactDOM.render(
<StateProvider initialstate={initialState} reducer={reducer}>
<App />
</StateProvider>

, document.getElementById('root'));
