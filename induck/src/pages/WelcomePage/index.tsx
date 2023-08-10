import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Welcome from '../../components/Welcome';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

type pageTypes = {
	isLogin: boolean
}
function WelcomePage({isLogin}: pageTypes) {
	return (
		<>
			<Routes>
				<Route path='/' element={
					<Welcome />
				}/>
				<Route path='/signin' element={
					<SignIn />
				}/>
				<Route path='/signup' element={
					<SignUp />
				}/>
			</Routes>
		</>
	)
}

export default WelcomePage;