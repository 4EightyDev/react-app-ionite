import { motion } from 'framer-motion';

const BtnPrimary = (props) => {
	return (
		<motion.button
			viewport={{ once: true }}
			whileInView={{ scale: 1, opacity: 1 }}
			initial={{ scale: 2, opacity: 0 }}
			transition={{ delay: 0.5 }}
			className={`group rounded-full shadow-lg shadow-sky-500/10 ${props.className}`}>
			<div class='flex rounded-full bg-gradient-to-r from-sky-500/20 via-green-300 to-sky-500/20 p-px'>
				<div class='flex-center relative min-w-[200px] rounded-full bg-slate-900 px-5 py-3'>
					<span className='text-lg font-bold leading-tight text-sky-200'>
						{props.text}
					</span>
					<div class='max-w-3/4 absolute top-[-1px] left-12 right-12 h-[2px] bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0 transition-all group-hover:left-6 group-hover:right-6 group-hover:top-[-2px] group-hover:h-[3px]'></div>
					<div class='max-w-3/4 absolute bottom-[-1px] left-12 right-12 h-[2px] bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0 transition-all group-hover:left-6 group-hover:right-6 group-hover:bottom-[-2px] group-hover:h-[3px]'></div>
				</div>
			</div>
		</motion.button>
	);
};

export default BtnPrimary;
