import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function App() {
	const titleRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		if (titleRef) {
			gsap.to(titleRef.current, { autoAlpha: 1, duration: 3 });
		}
	}, [titleRef]);

	return (
		<div>
			<h1 ref={titleRef} className="text-3xl font-bold underline invisible">
				Customer Information Management
			</h1>
		</div>
	);
}
