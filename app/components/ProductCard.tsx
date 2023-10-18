'use client';

import React from 'react';
import Button from './Button';

const ProductCard = () => {
	return (
		<div>
			<Button
				text='addToCard'
				onClick={() => console.log('wow')}
			/>
		</div>
	);
};

export default ProductCard;
