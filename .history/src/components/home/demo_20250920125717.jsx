'use client';
import React, { useEffect, useState } from 'react';
import { ZoomParallax } from './zoom-parallax';

export default function DefaultDemo() {
	const [imageArray, setImageArray] = useState([]);

	useEffect(() => {
		// Dynamically import all images from the assets folder
		const images = import.meta.glob('../../assets/*.jpg');
		const loadImages = async () => {
			const loadedImages = await Promise.all(
				Object.keys(images).map(async (key) => {
					const module = await images[key]();
					return {
						src: module.default,
						alt: key.split('/').pop(),
					};
				})
			);
			setImageArray(loadedImages);
		};
		loadImages();
	}, []);

	return (
		<main className="min-h-screen w-full">
			<div className="relative flex h-[50vh] items-center justify-center">
				{/* Radial spotlight */}
				<div
					aria-hidden="true"
					className="pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)] blur-[30px]"
				/>
				<h1 className="text-center text-4xl font-bold">
					Scroll Down for Zoom Parallax
				</h1>
			</div>
			{imageArray.length > 0 && <ZoomParallax images={imageArray} />}
			<div className="h-[50vh]" />
		</main>
	);
}
