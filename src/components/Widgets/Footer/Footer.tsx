import { FC } from 'react'
import s from './Footer.module.less'
import { Figma, logo, World } from './res'
import { useNavigate } from 'react-router-dom'
import { NAV_REGISTRATION, NAV_SPEAKERS } from '@constants/navigation'

const Footer: FC = () => {
	const navigate = useNavigate()

	return (
		<footer className={s.root}>
			<div className={s.topFooter}>
				<Figma />
				<nav className={s.footerMenu}>
					<div className={s.menuLinks}>
						<h4 className={s.linksHeader}>Menu</h4>
						<ul className={s.linksContainer}>
							<li>
								<a
									className={s.footerLink}
									onClick={() => navigate(NAV_SPEAKERS)}
								>
									Speakers
								</a>
							</li>
							<li>
								<a
									className={s.footerLink}
									onClick={() => navigate(NAV_REGISTRATION)}
								>
									Get tickets
								</a>
							</li>
						</ul>
					</div>
					<div className={s.resourcesLinks}>
						<h4 className={s.linksHeader}>Resources</h4>
						<ul className={s.linksContainer}>
							<li>
								<a className={s.footerLink} href=''>
									Why attend
								</a>
								<span> ↗</span>
							</li>
							<li>
								<a className={s.footerLink} href=''>
									FAQ
								</a>
							</li>
							<li>
								<a className={s.footerLink} href=''>
									Sponsors
								</a>
							</li>
							<li>
								<a className={s.footerLink} href=''>
									Hotels
								</a>
								<span> ↗</span>
							</li>
							<li>
								<a className={s.footerLink} href=''>
									Visa letters
								</a>
								<span> ↗</span>
							</li>
							<li>
								<a className={s.footerLink} href=''>
									Code of conduct
								</a>
								<span> ↗</span>
							</li>
						</ul>
					</div>
					<div className={s.followLinks}>
						<h4 className={s.linksHeader}>Follow</h4>
						<ul className={s.linksContainer}>
							<li>
								<a className={s.footerLink} href=''>
									X
								</a>
								<span> ↗</span>
							</li>
							<li>
								<a className={s.footerLink} href=''>
									LinkedIn
								</a>
								<span> ↗</span>
							</li>
							<li>
								<a className={s.footerLink} href=''>
									Instagram
								</a>
								<span> ↗</span>
							</li>
							<li>
								<a className={s.footerLink} href=''>
									YouTube
								</a>
								<span> ↗</span>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<div className={s.bottomFooter}>
				<img src={logo} alt='' />
				<div className={s.copyrightContainer}>
					<World className={s.worldIcon} /> English ↓ Cookie settings / © Figma
					2024
				</div>
			</div>
		</footer>
	)
}

export default Footer
