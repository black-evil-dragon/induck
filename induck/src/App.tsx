import React from 'react';
import { Route, Routes } from 'react-router-dom'

import WelcomePage from './pages/WelcomePage';

function App() {
	const isLogin: boolean = false
	return (
		<>
			{!isLogin ? <WelcomePage isLogin={isLogin} /> : <></>}
		</>
	);
}

export default App;
