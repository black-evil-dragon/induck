import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/scss/index.scss';

import App from './App';
import SignUp from './components/SignUp';

console.log(document.getElementById('root'));
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter basename="/induck">
			<Routes>
				<Route path='/' element={<App />}/>
				<Route path='/signup' element={<SignUp />}/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)

