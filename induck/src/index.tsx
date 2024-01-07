import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes } from 'react-router-dom';

import './styles/scss/index.scss';

import App from './App';


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter basename={'https://black-evil-dragon.github.io/'}>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
