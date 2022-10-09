import { Fragment, useEffect, useState } from 'react'

export default function CopyClipboart({ isActivated }) {
	const [animation, setAnimation] = useState('-bottom-40')

	function copyClipboart() {
		setAnimation('bottom-4')
		setTimeout(() => {
			setAnimation('-bottom-40')
		}, 1500)
	}

	useEffect(() => {
		if (isActivated) {
			copyClipboart()
		}
	}, [isActivated])

	return (
		<Fragment>
			<div
				className={`bg-white py-4 px-6 max-w-md border-l-4 border-green-600 rounded-lg flex items-center gap-3 shadow-lg fixed transition-all ${animation}`}
			>
				<div>
					<svg xmlns='http://www.w3.org/2000/svg' className='h-7 w-7 text-green-600' viewBox='0 0 20 20' fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
							clipRule='evenodd'
						/>
					</svg>
				</div>
				<div>
					<h3 className='font-semibold text-xs sm:text-base'>Success</h3>
					<p className='text-gray-500 text-xs sm:text-base'>Copied correctly to clipboard</p>
				</div>
			</div>
		</Fragment>
	)
}
