import { FC } from 'react'
import s from './Header.module.less'
import { useLocation, useNavigate } from 'react-router-dom'
import { NAV_HOME, NAV_REGISTRATION, NAV_SPEAKERS } from '@constants/navigation'
import { Logo } from './res'
import classNames from 'classnames'

const Header: FC = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	console.log(pathname === NAV_SPEAKERS)

	return (
		<header className={s.root}>
			{pathname === NAV_HOME ? (
				<div
					className={s.headerTxt}
					dangerouslySetInnerHTML={{
						__html: 'Figma’s conference for people who build products',
					}}
				/>
			) : (
				<Logo
					className={classNames(s.logo, {
						[s.speakers]: pathname === NAV_SPEAKERS,
					})}
					onClick={() => navigate(NAV_HOME)}
				/>
			)}
			<div className={s.navigationContainer}>
				<button
					className={classNames(s.btn, s.speakersBtn, {
						[s.speakersPage]: pathname === NAV_SPEAKERS,
					})}
					onClick={() => navigate(NAV_SPEAKERS)}
				>
					Speakers
				</button>
				<button
					className={classNames(s.btn, s.ticketsBtn, {
						[s.speakersPage]: pathname === NAV_SPEAKERS,
					})}
					onClick={() => navigate(NAV_REGISTRATION)}
				>
					Get tickets
				</button>
			</div>
		</header>
	)
}

export default Header
