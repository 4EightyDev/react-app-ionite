import { BtnIonite, HeroBackground, AppIonite } from '../';
import { motion } from 'framer-motion';

const HeroNew = () => {
	return (
		<>
			<div
				id='Hero'
				className='boxed relative z-50 pt-6 pb-12 sm:pb-24 sm:pt-12 md:py-32 lg:py-36 xl:flex xl:h-screen xl:items-center xl:py-28'>
				<div className='mt-[100px] grid grid-cols-1 gap-8 md:grid-cols-2'>
					<motion.div
						id='introCopy'
						className='text-center md:text-left'
						whileInView={{ y: 0, opacity: 1 }}
						initial={{ y: 50, opacity: 0 }}
						transition={{ delay: 0.5, duration: 1 }}>
						<h1 className='mx-auto mb-6 w-max text-[3.5rem] font-bold leading-none tracking-tight sm:text-[5rem] md:mx-0 md:text-[4rem] lg:text-[5rem] xl:text-[6rem]'>
							<span className='bg-gradient-to-r from-sky-300 to-sky-200 bg-clip-text text-transparent'>
								Identity
							</span>
							<span className='flex bg-gradient-to-r from-green-400 to-sky-500 bg-clip-text text-transparent'>
								Amplified<span className='text-[50%]'>&#8482;</span>
							</span>
						</h1>
						<p className='mb-12 text-slate-900 dark:text-white sm:text-xl md:text-lg lg:text-xl xl:text-2xl'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
							est perferendis.
						</p>
						<BtnIonite text='Get Started' />
					</motion.div>
					<motion.div
						id='introApp'
						className='relative flex items-center justify-center'
						whileInView={{ y: 0, opacity: 1 }}
						initial={{ y: 50, opacity: 0 }}
						transition={{ delay: 0.65, duration: 1 }}>
						<AppIonite class='w-full max-w-xl md:absolute md:left-0 md:w-screen md:max-w-3xl lg:max-w-3xl xl:max-w-4xl' />
					</motion.div>
				</div>
			</div>
			<HeroBackground className='absolute -top-12 -right-24 z-0 w-2/3 max-w-full md:w-[60%] lg:w-1/2' />
		</>
	);
};

export default HeroNew;
