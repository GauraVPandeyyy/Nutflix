'use client';
import React from 'react';
import { ZoomParallax } from './zoom-parallax';

export default function DefaultDemo() {
	// Dynamically import all images from the assets folder
	const images = import.meta.globEager('../../assets/*.jpg');
	const imageArray = Object.keys(images).map((key) => ({
		src: images[key].default,
		alt: key.split('/').pop(),
	}));

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
			<ZoomParallax images={imageArray} />
			<div className="h-[50vh]" />
		</main>
	);
}
