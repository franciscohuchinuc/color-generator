import { useEffect, useState } from 'react'
import CopyClipboart from './CopyClipboart'

export default function Generator() {
	const [color, setColor] = useState('')
	const [activeAnimation, setActiveAnimation] = useState(false)

	function getRandomColor() {
		var letters = '0123456789ABCDEF'
		var color = '#'
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)]
		}
		setColor(color)
	}

	function copyClipboart() {
		navigator.clipboard.writeText(color).then(() => {
			setActiveAnimation(true)
			setTimeout(() => {
				console.log('Color ' + color)
				setActiveAnimation(false)
			}, 1000)
		})
	}

	useEffect(() => {
		getRandomColor()
	}, [])

	return (
		<div className='flex flex-col gap-4 h-screen items-center justify-center transition-colors' style={{ backgroundColor: `${color}` }}>
			<button onClick={getRandomColor} className='bg-white text-black text-sm font-semibold py-2 px-4 rounded-lg border sm:text-lg'>
				Generate
			</button>
			<button
				title='Copy in clipboard'
				className='group flex items-center justify-center gap-4 bg-white/50 font-semibold text-black text-sm rounded-full overflow-hidden py-2 px-4 transition-all hover:bg-white/60 sm:text-lg'
				onClick={copyClipboart}
			>
				<div>
					<div className='group-hover:animate-bounce'>
						<svg
							className='block transition-all -translate-x-10 group-hover:translate-x-10 group-hover:sm:translate-x-12 group-hover:scale-110'
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							viewBox='0 0 16 16'
						>
							{' '}
							<path d='M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z' />{' '}
							<path d='M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z' />
						</svg>
					</div>
				</div>
				<span className='-translate-x-4 transition-all block ml-1 font-semibold group-hover:translate-x-28'>{color}</span>
			</button>
			<CopyClipboart isActivated={activeAnimation} />
		</div>
	)
}
