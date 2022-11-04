const people = [
	{
		name: 'Tom Walton',
		status: 'Active',
		email: 'tom@ionite.com',
	},
	{
		name: 'Mark Wilson',
		status: 'Active',
		email: 'mark@ionite.com',
	},
	{
		name: 'Jim Davis',
		status: 'Active',
		email: 'jim@ionite.com',
	},
	// More people...
];

const ModuleTable = (props) => {
	return (
		<>
			<div
				id='moduleTable'
				className='overflow-hidden rounded-md border border-sky-900/50 sm:rounded-lg md:rounded-xl'>
				<table className='min-w-full divide-y divide-sky-900/50'>
					<thead className='bg-slate-900 text-[1rem] brightness-125'>
						<tr>
							<th
								scope='col'
								className='py-2 pl-4 pr-3 text-left text-[.8rem] font-semibold text-sky-300/80 sm:pl-6 sm:text-lg'>
								Name
							</th>
							<th
								scope='col'
								className='hidden px-3 py-2 text-left text-[.8rem] font-semibold text-sky-300/80 sm:table-cell sm:text-lg'>
								Email
							</th>
							<th
								scope='col'
								className='hidden px-3 py-2 text-left text-[.8rem] font-semibold text-sky-300/80 sm:text-lg lg:table-cell'>
								Status
							</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-sky-900/50 bg-slate-900 text-[.8rem]'>
						{people.map((person) => (
							<tr
								key={person.email}
								className='hover:bg-sky-500/[2%]'>
								<td className='text-sm w-full max-w-0 py-2 px-3 text-white sm:w-auto sm:max-w-none sm:pl-6'>
									{person.name}
									<dl className='font-normal lg:hidden'>
										<dt className='sr-only'>Status</dt>
										<dd className='mt-1 truncate text-sky-500'>
											<span className='mr-2 inline-block aspect-square h-[10px] w-[10px] rounded-full bg-green-400 p-[5px]'></span>
											{person.status}
										</dd>
										<dt className='sr-only sm:hidden'>Email</dt>
									</dl>
								</td>
								<td className='hidden px-3 py-4 text-white sm:table-cell'>
									{person.email}
								</td>
								<td className='hidden px-3 py-4 text-white lg:table-cell'>
									<span className='mr-2 inline-block aspect-square h-[10px] w-[10px] rounded-full bg-green-400 p-[5px]'></span>
									{person.status}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};
export default ModuleTable;
