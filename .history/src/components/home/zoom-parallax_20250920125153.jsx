'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface Image {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	const scales = useTransform(scrollYProgress, [0, 1], [1, 5]);

	return (
		<div ref={container} className="relative h-[300vh]">
			<div className="sticky top-0 h-screen overflow-hidden">
				{images.map(({ src, alt }, index) => (
					<motion.div
						key={index}
						style={{ scale: scales }}
						className="absolute top-0 left-0 flex h-full w-full items-center justify-center"
					>
						<div className="relative h-[25vh] w-[25vw]">
							<img
								src={src || '/placeholder.svg'}
								alt={alt || `Parallax image ${index + 1}`}
								className="h-full w-full object-cover rounded-lg shadow-lg"
							/>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}
