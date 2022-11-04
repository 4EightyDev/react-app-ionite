import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import {
	CursorArrowRaysIcon,
	EnvelopeOpenIcon,
	UsersIcon,
} from '@heroicons/react/24/outline';

const stats = [
	{
		id: 1,
		name: 'Stability Score',
		stat: '71.897',
		icon: UsersIcon,
		change: '122',
		changeType: 'increase',
	},
	{
		id: 1,
		name: 'Perf. Score',
		stat: '49.516',
		icon: UsersIcon,
		change: '122',
		changeType: 'increase',
	},
	{
		id: 1,
		name: 'Missing Configs',
		stat: '13.642',
		icon: UsersIcon,
		change: '56',
		changeType: 'decrease',
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const ModuleConfigurationStatus = (props) => {
	return (
		<dl
			id='ModuleConfigurationStatus'
			className={` native-class ${props.moduleLayout}`}>
			{stats.map((item) => (
				<div
					key={item.id}
					className={`relative w-full overflow-hidden border border-sky-900/50 bg-slate-900 px-4 pt-5 pb-12 shadow transition-all hover:border-green-400 sm:px-6 sm:pt-6 ${props.moduleChildren}`}>
					<dt>
						<div className='absolute flex scale-[1.5] items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-sky-500 p-3 sm:scale-[1.8]'>
							<item.icon
								className='absolute z-20 h-3 w-3 text-white'
								aria-hidden='true'
							/>
							<span className='absolute top-[1px] right-[1px] h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-full bg-slate-900'></span>
						</div>
						<p className='ml-16 truncate text-[10px] font-medium text-white'>
							{item.name}
						</p>
					</dt>
					<dd className='ml-16 flex items-baseline pb-6 sm:pb-7'>
						<p className='bg-gradient-to-br from-sky-300 to-sky-200 bg-clip-text text-2xl font-semibold text-transparent sm:text-4xl'>
							{item.stat}
						</p>
						<p
							className={classNames(
								item.changeType === 'increase'
									? 'text-green-500'
									: 'text-red-600',
								'text-sm ml-2 flex items-baseline font-semibold'
							)}>
							{item.changeType === 'increase' ? (
								<ArrowUpIcon
									className='h-5 w-5 flex-shrink-0 self-center text-green-400'
									aria-hidden='true'
								/>
							) : (
								<ArrowDownIcon
									className='h-5 w-5 flex-shrink-0 self-center text-red-500'
									aria-hidden='true'
								/>
							)}

							<span className='sr-only'>
								{' '}
								{item.changeType === 'increase'
									? 'Increased'
									: 'Decreased'} by{' '}
							</span>
							{item.change}
						</p>
						<div className='absolute inset-x-0 bottom-0 border-t border-sky-900/50 bg-slate-900 px-4 py-4 brightness-125 sm:px-6'>
							<div className='text-sm'>
								<a
									href='#'
									className='font-medium text-sky-500 hover:text-green-400'>
									{' '}
									View all<span className='sr-only'> {item.name} stats</span>
								</a>
							</div>
						</div>
					</dd>
				</div>
			))}
		</dl>
	);
};
export default ModuleConfigurationStatus;
