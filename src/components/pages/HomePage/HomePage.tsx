import { FC } from 'react'
import s from './HomePage.module.less'
import { AnimateSection } from './fragments'
import {
	eight,
	first,
	five,
	four,
	line,
	mainImage,
	second,
	seven,
	six,
	Star,
	third,
	Watch,
} from './res'
import { useNavigate } from 'react-router-dom'
import { NAV_REGISTRATION, NAV_SPEAKERS } from '@constants/navigation'

const HomePage: FC = () => {
	const navigate = useNavigate()
	const sponsors = [first, second, third, four, five, six, seven, eight]

	return (
		<div className={s.root}>
			<AnimateSection />
			<section className={s.imageSection}>
				<img src={mainImage} className={s.mainImage} alt='' />
			</section>
			<section className={s.buyTicketsSection}>
				<div className={s.txtBlock}>
					<div className={s.buySubTitleContainer}>
						<Watch /> join us
					</div>
					<h3
						className={s.buyHeader}
						dangerouslySetInnerHTML={{
							__html: 'Early bird tickets available now',
						}}
					/>
					<div
						className={s.buyDescription}
						dangerouslySetInnerHTML={{
							__html:
								'Register now to save 50% and be the first to reserve a seat at the most popular talks.',
						}}
					/>
				</div>
				<button className={s.buyBtn} onClick={() => navigate(NAV_REGISTRATION)}>
					Get tickets
				</button>
			</section>
			<section className={s.lineupSection}>
				<div className={s.lineupTxt}>
					<div className={s.lineupSubTitleContainer}>
						<Star /> the lineup
					</div>
					<div
						className={s.lineupDescription}
						dangerouslySetInnerHTML={{
							__html:
								'2024 will be the most exciting Config yet, with programming designed to connect a dynamic community of builders to the future of product development.',
						}}
					/>
					<button
						className={s.lineupBtn}
						onClick={() => navigate(NAV_SPEAKERS)}
					>
						see all speakers
					</button>
				</div>
				<h3 className={s.lineupHeader}>
					<div
						className={s.lineupHeaderTxt}
						dangerouslySetInnerHTML={{ __html: '75 + Speakers' }}
					/>
					<div
						className={s.lineupHeaderTxt}
						dangerouslySetInnerHTML={{ __html: '50 + Sessions' }}
					/>
					<div
						className={s.lineupHeaderTxt}
						dangerouslySetInnerHTML={{ __html: '8,000 + Attendees' }}
					/>
				</h3>
			</section>
			<section className={s.sponsorsSection}>
				<div className={s.sponsorsSubTitle}>
					<Watch className={s.sponsorsIcon} /> sponsors
				</div>
				<h3
					className={s.sponsorsTitle}
					dangerouslySetInnerHTML={{ __html: 'Thank you to our sponsors' }}
				/>
				<div
					className={s.sponsorsDescription}
					dangerouslySetInnerHTML={{
						__html:
							"We're excited to bring you an incredible Config experience, made possible by the support of our sponsors",
					}}
				/>
				<div className={s.sponsorsArray}>
					{sponsors.map(sponsor => {
						return <img key={sponsor} src={sponsor} alt='' />
					})}
				</div>
				<button className={s.sponsorsBtn}>See all sponsors</button>
			</section>
			<div className={s.lineContainer}>
				<img src={line} className={s.line} />
			</div>
		</div>
	)
}

export default HomePage
