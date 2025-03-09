import { FC } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import s from './Words.module.less'

const LetterC = ({ position }: any) => (
	<mesh position={position}>
		<torusGeometry args={[1, 0.4, 16, 32, Math.PI * 1.5]} />
		<meshStandardMaterial color='#252525' />
	</mesh>
)

const LetterO = ({ position }: any) => (
	<mesh position={position}>
		<torusGeometry args={[1, 0.4, 16, 32]} />
		<meshStandardMaterial color='#252525' />
	</mesh>
)

const LetterN = ({ position }: any) => (
	<group position={position}>
		<mesh position={[-0.6, 0, 0]}>
			<boxGeometry args={[0.5, 2, 0.5]} />
			<meshStandardMaterial color='#252525' />
		</mesh>
		<mesh rotation={[0, 0, -Math.PI / 4]}>
			<boxGeometry args={[1.5, 0.5, 0.5]} />
			<meshStandardMaterial color='#252525' />
		</mesh>
		<mesh position={[0.6, 0, 0]}>
			<boxGeometry args={[0.5, 2, 0.5]} />
			<meshStandardMaterial color='#252525' />
		</mesh>
	</group>
)

const LetterF = ({ position }: any) => (
	<group position={position}>
		<mesh position={[-0.4, 0, 0]}>
			<boxGeometry args={[0.5, 2, 0.5]} />
			<meshStandardMaterial color='#252525' />
		</mesh>
		<mesh position={[0.2, 0.6, 0]}>
			<boxGeometry args={[1.2, 0.5, 0.5]} />
			<meshStandardMaterial color='#252525' />
		</mesh>
		<mesh position={[0.2, -0.2, 0]}>
			<boxGeometry args={[0.8, 0.5, 0.5]} />
			<meshStandardMaterial color='#252525' />
		</mesh>
	</group>
)

const LetterI = ({ position }: any) => (
	<mesh position={position}>
		<boxGeometry args={[0.5, 2, 0.5]} />
		<meshStandardMaterial color='#252525' />
	</mesh>
)

const LetterG = ({ position }: any) => (
	<group position={position}>
		<mesh>
			<torusGeometry args={[1, 0.4, 16, 32, Math.PI * 1.5]} />
			<meshStandardMaterial color='#252525' />
		</mesh>
		<mesh position={[0.5, -0.2, 0]}>
			<boxGeometry args={[0.5, 0.5, 0.5]} />
			<meshStandardMaterial color='#252525' />
		</mesh>
	</group>
)

const Words: FC = () => {
	return (
		<div className={s.root}>
			<Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
				<ambientLight intensity={0.5} />
				<directionalLight position={[5, 5, 5]} intensity={1} />
				<OrbitControls enableZoom={false} enableRotate={false} />
				<Float>
					<LetterC position={[-6, 0, 0]} />
					<LetterO position={[-3, 0, 0]} />
					<LetterN position={[0, 0, 0]} />
					<LetterF position={[3, 0, 0]} />
					<LetterI position={[6, 0, 0]} />
					<LetterG position={[9, 0, 0]} />
				</Float>
			</Canvas>
		</div>
	)
}

export default Words
