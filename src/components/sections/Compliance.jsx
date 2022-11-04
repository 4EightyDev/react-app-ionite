import {
	ComplianceBackground,
	ModuleConfigurationStatus,
	BtnIonite,
} from '../';
import { motion } from 'framer-motion';

const Compliance = () => {
	return (
		<>
			<div className='relative overflow-hidden border-t border-b border-sky-500/30 bg-slate-900 py-8 brightness-[85%] sm:py-16 lg:flex lg:flex-row-reverse lg:items-center lg:justify-center xl:py-36'>
				<div className='boxed z-50 flex w-full flex-col gap-6 md:flex-row md:items-center lg:flex-col lg:px-32'>
					<div className='relative w-full text-center md:text-left lg:pr-[25%]'>
						<motion.div
							viewport={{ once: true }}
							whileInView={{ y: 0, opacity: 1 }}
							initial={{ y: 50, opacity: 0 }}
							transition={{ delay: 0, duration: 1 }}>
							<h2 className='mx-auto max-w-max bg-gradient-to-r from-green-400 to-sky-500 bg-clip-text text-[1.8rem] font-bold leading-none tracking-tighter text-transparent md:mx-0 lg:text-[2.4rem] xl:text-[2.8rem]'>
								Government Compliance
							</h2>
							<p className='mb-6 text-[1.2rem] font-medium tracking-tight text-white lg:text-[1.4rem] xl:text-[1.6rem]'>
								Lorem ipsum dolor sit amet.
							</p>
						</motion.div>
						<motion.p
							viewport={{ once: true }}
							whileInView={{ y: 0, opacity: 1 }}
							initial={{ y: 50, opacity: 0 }}
							transition={{ delay: 0.5, duration: 1 }}
							className='sm:text-md mx-auto mb-8 max-w-md text-slate-900 dark:text-white sm:max-w-xl lg:ml-0 lg:max-w-2xl'>
							Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing
							quis in viverra tristique sem. Ornare feugiat viverra eleifend
							fusce.
						</motion.p>
						<BtnIonite
							text='Request A Demo'
							className='right-0 top-1/2 lg:absolute'
						/>
					</div>
					<motion.div
						className='w-full'
						viewport={{ once: true }}
						whileInView={{ y: 0, opacity: 1 }}
						initial={{ y: 50, opacity: 0 }}
						transition={{ delay: 0.5, duration: 1 }}>
						<ModuleConfigurationStatus
							moduleChildren='group-hover:first-of-type:blur-sm group-hover:last-of-type:blur-sm group-hover:first-of-type:translate-x-32 group-hover:last-of-type:-translate-x-32 group-hover:[:nth-of-type(2)&]:shadow-2xl group-hover:[:nth-of-type(2)&]:shadow-black/50 group-hover:[:nth-of-type(2)&]:scale-[1.3] rounded-2xl last-of-type:hidden max-w-sm mx-auto sm:max-w-none sm:-mx-0 lg:last-of-type:block first-of-type:scale-[.8] sm:first-of-type:scale-[1] first-of-type:z-10 first-of-type:-translate-x-3 sm:first-of-type:-translate-x-0 sm:first-of-type:shadow-none first-of-type:shadow-2xl first-of-type:shadow-black/30 first-of-type:origin-left [:nth-of-type(2)&]:z-30 [:nth-of-type(2)&]:-translate-y-16 sm:[:nth-of-type(2)&]:-translate-y-0'
							moduleLayout='flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row'
						/>
					</motion.div>
				</div>
				<ComplianceBackground className='absolute top-20 w-screen opacity-[2%]' />
			</div>
		</>
	);
};
export default Compliance;
