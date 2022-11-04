import React from 'react';
import { Logo, Navbar, BtnAmplified } from '../';
import { useScrollPosition } from '../../hooks/useScrollPosition';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Header = () => {
	const scrollPosition = useScrollPosition();

	return (
		<header
			className={classNames(
				scrollPosition > 0
					? 'bg-slate-900/80 backdrop-blur-[6px]'
					: 'bg-slate-900/0',
				'fixed left-0 right-0 z-[99999] w-full transition-all duration-500'
			)}>
			<div className='flex-center boxed h-[100px]'>
				<Logo />
				<Navbar />
				<div className='hidden origin-right scale-[.9] lg:block'>
					<BtnAmplified text='Request A Demo' />
				</div>
			</div>
			<div
				className={classNames(
					scrollPosition > 0
						? 'opacity-1 w-screen bg-sky-500/[30%] transition-all duration-500'
						: 'w-0 opacity-0',
					'mx-auto h-px transition-all duration-500'
				)}></div>
		</header>
	);
};

export default Header;
