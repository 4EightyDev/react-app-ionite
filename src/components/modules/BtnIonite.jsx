import { motion } from 'framer-motion';

const BtnPrimary = (props) => {
	return (
		<motion.button
			viewport={{ once: true }}
			whileInView={{ scale: 1, opacity: 1 }}
			initial={{ scale: 2, opacity: 0 }}
			transition={{ delay: 0.5 }}
			className={`rounded-full shadow-lg shadow-sky-500/10 transition-shadow hover:shadow-xl hover:shadow-sky-500/10 ${props.className}`}>
			<div class='flex rounded-full bg-gradient-to-r from-sky-500/20 via-green-300 to-sky-500/20 p-px'>
				<div class='flex-center relative min-w-[200px] rounded-full bg-slate-900 px-5 py-3'>
					<span className='text-lg font-bold leading-tight text-sky-200'>
						{props.text}
					</span>
					<div class='max-w-3/4 absolute -top-px left-8 right-10 h-[2px] bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0'></div>
					<div class='max-w-3/4 absolute -bottom-px left-10 right-8 h-[2px] bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0'></div>
				</div>
			</div>
		</motion.button>
	);
};

export default BtnPrimary;
