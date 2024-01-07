import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes } from 'react-router-dom';

import './styles/scss/index.scss';

import App from './App';

console.log(document.getElementById('root'));
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter basename={'https://black-evil-dragon.github.io/induck/'}>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
