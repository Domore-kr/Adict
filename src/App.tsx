import { Route, Routes, useLocation } from 'react-router-dom'

import { HomePage, RegistrationPage, SpeakersPage } from '@components/pages'
import { Footer, Header } from '@components/Widgets'
import {
	NAV_HOME,
	NAV_REGISTRATION,
	NAV_SPEAKERS,
} from './constants/navigation'

import s from './App.module.less'
import classNames from 'classnames'

function App() {
	const { pathname } = useLocation()
	const location = useLocation()

	return (
		<div
			className={classNames(s.root, {
				[s.speakersPage]: pathname === NAV_SPEAKERS,
			})}
		>
			<Header />
			<Routes location={location} key={pathname}>
				<Route path={NAV_HOME} Component={HomePage} />
				<Route path={NAV_SPEAKERS} Component={SpeakersPage} />
				<Route path={NAV_REGISTRATION} Component={RegistrationPage} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
