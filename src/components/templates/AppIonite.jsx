import { ModuleTable, ModuleConfigurationStatus } from '../';

const AppIonite = (props) => {
	return (
		<div className={props.class}>
			<div className='group relative w-full rounded-xl bg-[#0A101F]/70 ring-1 ring-sky-500/30 backdrop-blur-sm md:aspect-video md:rounded-2xl'>
				<div class='max-w-3/4 absolute -top-px left-8 right-10 h-[2px] bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0'></div>
				<div class='max-w-3/4 absolute -bottom-px left-10 right-8 h-[2px] bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0'></div>
				<div
					id='addressBar'
					className='flex w-[calc(100%-2px)] items-center justify-center rounded-xl rounded-b-none rounded-l-none bg-sky-500/[3%] py-2'>
					<div className='absolute left-0 flex items-center justify-start px-3 [&>*]:mx-1'>
						<span className='aspect-square w-2 rounded-full bg-[#f55f57] md:w-3'></span>
						<span className='aspect-square w-2 rounded-full bg-[#f9bc2f] md:w-3'></span>
						<span className='aspect-square w-2  rounded-full bg-[#3fc940] md:w-3'></span>
					</div>
					<div className='w-7/12 max-w-max rounded-full bg-sky-300/[10%] sm:max-w-none'>
						<span className='flex-center py-1 px-2 font-mono text-[.6rem] text-sky-300 sm:px-4 sm:text-[.65rem] md:text-[.8rem] lg:justify-center lg:text-[1rem]'>
							https://app.ionite.com
						</span>
					</div>
					<div></div>
				</div>
				<div
					id='appWrapper'
					className='flex h-full gap-2 rounded-md rounded-b-xl p-2 text-white sm:gap-3 sm:rounded-lg sm:p-3 md:rounded-xl md:rounded-b-2xl lg:gap-4 lg:p-4'>
					<div
						id='appSidebar'
						className='flex-2 w-1/5 grow rounded-md border border-sky-900/50 sm:rounded-lg md:flex-1 lg:w-[200px]'></div>
					<div
						id='appContainer'
						className='flex flex-auto flex-col gap-2 sm:gap-3 lg:gap-4'>
						<div className='shadow-black transition-all sm:gap-3 sm:rounded-lg md:rounded-xl md:group-hover:-translate-x-48 md:group-hover:-translate-y-8 md:group-hover:scale-105 md:group-hover:shadow-2xl lg:gap-4 lg:group-hover:-translate-x-56 xl:group-hover:-translate-x-52'>
							<h2 className='mb-2 border-l-4 border-green-400 pl-3 font-bold text-white'>
								User Status
							</h2>
							<ModuleTable />
						</div>
						<div className='flex flex-1 flex-col'>
							<div className='overflow-hiden lg:group-hover:-translate-x-54 flex-auto transition-all sm:gap-3 md:group-hover:-translate-x-48 md:group-hover:translate-y-10 md:group-hover:scale-105 md:group-hover:shadow-2xl lg:gap-4 lg:group-hover:translate-y-14 xl:group-hover:-translate-x-52'>
								<h2 className='mb-2 border-l-4 border-green-400 pl-3 font-bold text-white xl:mt-6'>
									Configuration Status
								</h2>
								<ModuleConfigurationStatus
									moduleLayout='flex gap-3'
									moduleChildren='first-of-type:hidden last-of-type:hidden xl:first-of-type:block rounded-lg sm:rounded-lg md:rounded-xl'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AppIonite;
