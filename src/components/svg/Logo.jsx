import { useScrollPosition } from '../../hooks/useScrollPosition';
import { motion } from 'framer-motion';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Logo = () => {
	const scrollPosition = useScrollPosition();
	return (
		<a
			href='/'
			className='relative origin-left scale-75 xl:scale-[.95]'
			title='ionite&#8482; - Identity Amplified&#8482;'>
			<motion.svg
				id='ionite-logo'
				whileInView={{ opacity: 1, filter: 'blur(0)' }}
				initial={{ opacity: 0, filter: 'blur(200px)' }}
				transition={{ delay: 1 }}
				className={classNames(
					scrollPosition > 0
						? 'relative z-50 h-[60px] opacity-0 blur-lg transition-all duration-500'
						: 'relative z-50 h-[60px] transition-all delay-300 duration-500'
				)}
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 250 89.56'>
				<linearGradient
					id='three-color-gradient'
					x1='189.7'
					y1='117.43'
					x2='38.17'
					y2='-34.1'
					gradientTransform='matrix(1, 0, 0, 1, 0, 0)'
					gradientUnits='userSpaceOnUse'>
					<stop
						offset={0}
						stopColor='var(--green-400)'
					/>
					<stop
						offset={0.5}
						stopColor='var(--sky-500'
					/>
					<stop
						offset={1}
						stopColor='var(--green-400'
					/>
				</linearGradient>
				<g fill='url(#three-color-gradient)'>
					<path d='M113.28,17.36c-6.51,0-12.31,2.49-16.3,6.52-.55,.56-1.49,.36-1.8-.36l-1.81-4.24c-.17-.41-.58-.68-1.02-.68h-7.91c-.61,0-1.11,.5-1.11,1.11v52.08c0,.61,.5,1.11,1.11,1.11h11.67c.61,0,1.11-.5,1.11-1.11v-28.24c0-8.46,4.8-13.72,12.13-13.72,6.15,0,8.77,3.83,8.77,11.78v30.18c0,.61,.5,1.11,1.11,1.11h11.68c.61,0,1.11-.5,1.11-1.11V39.32c0-13.31-6.76-21.96-18.75-21.96Zm-99.39,1.11v53.33c0,.61-.5,1.11-1.11,1.11H1.11c-.61,0-1.11-.5-1.11-1.11V18.47c0-.61,.5-1.11,1.11-1.11H12.78c.61,0,1.11,.5,1.11,1.11ZM7.85,.06C3.31-.52-.52,3.31,.06,7.85c.39,3.1,2.89,5.6,5.99,5.99,4.54,.57,8.36-3.25,7.79-7.79C13.44,2.95,10.94,.45,7.85,.06ZM151.77,17.36h-11.67c-.61,0-1.11,.5-1.11,1.11v53.33c0,.61,.5,1.11,1.11,1.11h11.67c.61,0,1.11-.5,1.11-1.11V18.47c0-.61-.5-1.11-1.11-1.11ZM145.94,0h0c-3.84,0-6.95,3.11-6.95,6.95s3.11,6.95,6.95,6.95h0c3.84,0,6.95-3.11,6.95-6.95s-3.11-6.95-6.95-6.95Zm55.62,72.92h-16.37c-1.58,0-3.08-.13-4.48-.4h-.01c-8.71-1.63-13.88-8.18-13.88-18.07V31.25h-6.91v-9.15l18.34-13.37c1.02-.74,2.44-.02,2.44,1.24v6.29c0,.61,.49,1.11,1.09,1.11h11.73c.61,0,1.09,.49,1.09,1.11v11.71c0,.53-.37,.98-.86,1.09-.07,.01-.15,.02-.23,.02h-11.73c-.6,0-1.09,.49-1.09,1.1v20.19h.02c0,4.99,2.97,7.87,8.06,7.87h2.46c1.66,3.37,3.88,6.48,6.62,9.22,1.17,1.17,2.41,2.25,3.72,3.23ZM71.08,28.81c-3.21-4.4-7.45-7.59-12.17-9.46l-7.23,6.38L63.81,2.36c.54-1.04-.68-2.09-1.63-1.4l-29.89,21.71c-6.2,4.51-10,11.12-11.11,18.13-1.11,7.02,.45,14.46,4.96,20.68,3.21,4.4,7.45,7.58,12.17,9.47l7.23-6.39-12.14,23.4c-.54,1.03,.7,2.09,1.64,1.39l29.9-21.72c6.21-4.51,9.99-11.1,11.1-18.13,1.12-7.02-.45-14.46-4.96-20.67Zm-8.75,18.5c-1.2,7.57-8.32,12.75-15.9,11.55-7.57-1.2-12.75-8.32-11.55-15.9,1.2-7.57,8.32-12.75,15.89-11.54,7.57,1.2,12.75,8.32,11.55,15.89ZM222.25,17.37c-15.91,0-27.81,11.94-27.81,27.78s11.97,27.78,27.81,27.78c11.66,0,21.4-6.41,25.79-16.65,.43-1-.35-2.11-1.46-2.11h-12.09c-.51,0-1,.24-1.29,.65-2.28,3.38-6.22,5.44-10.95,5.44-6.35,0-10.89-3.23-12.64-9.14-.29-.99,.45-1.98,1.51-1.98h37.19c.82,0,1.5-.62,1.57-1.42,.08-.92,.13-1.84,.13-2.75,0-15.14-11.29-27.59-27.75-27.59Zm10.98,22.05h-21.51c-1.13,0-1.88-1.12-1.45-2.14,2.08-4.91,6.3-7.77,11.98-7.77s10.05,2.7,12.4,7.72c.48,1.02-.28,2.19-1.43,2.19Z' />
				</g>
			</motion.svg>

			<motion.svg
				id='ionite-mark'
				whileInView={{ opacity: 1, filter: 'blur(0)' }}
				initial={{ opacity: 0, filter: 'blur(200px)' }}
				transition={{ delay: 0 }}
				className={classNames(
					scrollPosition > 0
						? 'opacity-1 absolute left-0 top-[.01rem] z-30 h-[60px] transition-all delay-300 duration-500'
						: 'absolute top-[.01rem] left-[.865rem] z-30 h-[60px] transition-all duration-500'
				)}
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 32.12 51.35'>
				<linearGradient
					id='two-color-gradient'
					x1='27.42'
					y1='37.03'
					x2='4.7'
					y2='14.32'
					gradientTransform='matrix(1, 0, 0, 1, 0, 0)'
					gradientUnits='userSpaceOnUse'>
					<stop
						offset={0}
						stopColor='var(--green-400)'
					/>
					<stop
						offset={1}
						stopColor='var(--sky-500)'
					/>
				</linearGradient>
				<g fill='url(#two-color-gradient)'>
					<path
						class='c'
						d='M29.05,16.23c-1.85-2.54-4.31-4.39-7.03-5.47l-4.18,3.69L24.85,.94c.31-.6-.4-1.21-.94-.81L6.62,12.68C3.04,15.28,.84,19.1,.2,23.16c-.64,4.06,.26,8.36,2.87,11.96,1.85,2.54,4.31,4.38,7.03,5.47l4.18-3.7-7.02,13.53c-.31,.6,.4,1.21,.95,.81l17.29-12.56c3.59-2.61,5.78-6.42,6.42-10.48,.65-4.06-.26-8.36-2.86-11.95Zm-5.06,10.69c-.7,4.38-4.81,7.37-9.19,6.68-4.38-.7-7.37-4.81-6.67-9.19,.69-4.38,4.81-7.37,9.19-6.67,4.38,.69,7.37,4.81,6.68,9.18Z'
					/>
				</g>
			</motion.svg>
		</a>
	);
};

export default Logo;
