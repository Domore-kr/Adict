import { FC } from 'react'
import s from './AnimateSection.module.less'
import { Canvas } from '@react-three/fiber'
import { Words } from './fragments'

const AnimateSection: FC = () => {
	return (
		<div className={s.root}>
			<Words />
		</div>
	)
}

export default AnimateSection
