const GalleryItem = ({ file }) => {
	return (
		<li className={'relative'}>
			<div className="bg-[url('/assets/images/6.jpg')] bg-cover bg-center group aspect-video	 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
				{/* <img
					src={file.source}
					alt=''
					className='pointer-events-none object-cover group-hover:opacity-75 bg-bottom'
				/> */}
				<button type='button' className='absolute inset-0 focus:outline-none'>
					<span className='sr-only'>View details for {file.title}</span>
				</button>
			</div>
			<p className='pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900'>
				{file.title}
			</p>
		</li>
	);
};

export default GalleryItem;
