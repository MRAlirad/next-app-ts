'use client';

import { CldUploadWidget, CldImage } from 'next-cloudinary';
import { useState } from 'react';

interface CloudinaryResult {
	public_id: string;
}

const Upload = () => {
	const [publicId, setPublicId] = useState('');
	return (
		<>
			{publicId && (
				<CldImage
					src={publicId}
					width={270}
					height={180}
					alt='Movie'
				/>
			)}
			<CldUploadWidget
				uploadPreset='bnj9l7dk'
				onUpload={(result, widget) => {
					if (result.event === 'success') return;
					const info = result.info as CloudinaryResult;
					setPublicId(info.public_id);
				}}
			>
				{({ open }) => (
					<button
						className='btn btn-primary'
						onClick={() => open()}
					>
						upload
					</button>
				)}
			</CldUploadWidget>
		</>
	);
};

export default Upload;
