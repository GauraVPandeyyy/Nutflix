'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export function ZoomParallax({ images }) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	// Generate dynamic scales for each image
	const scales = images.map((_, index) =>
		useTransform(scrollYProgress, [0, 1], [1, 1 + (index + 1) * 0.5])
	);

	return (
		<div ref={container} className="relative h-[300vh]">
			<div className="sticky top-0 h-screen overflow-hidden">
				{images.map(({ src, alt }, index) => (
					<motion.div
						key={index}
						style={{ scale: scales[index] }}
						className="absolute top-0 left-0 flex h-full w-full items-center justify-center"
					>
						<div className="relative h-[25vh] w-[25vw]">
							<img
								src={src}
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
