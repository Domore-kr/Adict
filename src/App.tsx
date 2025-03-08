import { Route, Routes, useLocation } from 'react-router-dom'

import { HomePage, RegistrationPage, SpeakersPage } from '@components/pages'
import {
	NAV_HOME,
	NAV_REGISTRATION,
	NAV_SPEAKERS,
} from './constants/navigation'

import s from './App.module.less'

function App() {
	const { pathname } = useLocation()
	const location = useLocation()

	console.log(pathname)

	return (
		<div className={s.root}>
			<Routes location={location} key={pathname}>
				<Route path={NAV_HOME} Component={HomePage} />
				<Route path={NAV_SPEAKERS} Component={SpeakersPage} />
				<Route path={NAV_REGISTRATION} Component={RegistrationPage} />
			</Routes>
		</div>
	)
}

export default App
