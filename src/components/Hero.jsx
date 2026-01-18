import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { navLinks } from "../../constants";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
	const videoRef = useRef();
	const isMobile = useMediaQuery({ maxWidth: 767 });

	useGSAP(() => {
		// Split text animation
		const heroSplit = new SplitText(".title", { type: "chars, words" });
		const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

		heroSplit.chars.forEach((char) =>
			char.classList.add("text-gradient")
		);

		gsap.from(heroSplit.chars, {
			yPercent: 100,
			duration: 1.6,
			ease: "expo.out",
			stagger: 0.05,
		});

		gsap.from(paragraphSplit.lines, {
			opacity: 0,
			yPercent: 100,
			duration: 1.6,
			ease: "expo.out",
			stagger: 0.08,
			delay: 0.8,
		});

		// Scroll-controlled video playback
		const startValue = isMobile ? "top 50%" : "top top";
		const endValue = isMobile ? "120% top" : "bottom top";

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#hero",
				start: startValue,
				end: endValue,
				scrub: true,
				pin: true,
			},
		});

		videoRef.current.onloadedmetadata = () => {
			tl.to(videoRef.current, {
				currentTime: videoRef.current.duration,
			});
		};
	}, []);

	return (
		<section
			id="hero"
			className="w-full h-screen flex items-center justify-center bg-black px-2 sm:px-0"
			style={{ perspective: '1500px' }}
		>
			{/* === Card Container === */}
			<div 
				className="relative w-[98%] sm:w-[95%] md:w-[90%] h-[95%] sm:h-[92%] md:h-[90%] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-white/5 to-transparent"
				style={{
					transform: 'rotateX(2deg) rotateY(-1deg)',
					transformStyle: 'preserve-3d',
					boxShadow: `
						0 25px 50px -12px rgba(0, 0, 0, 0.8),
						0 0 0 1px rgba(255, 255, 255, 0.1),
						inset 0 1px 0 rgba(255, 255, 255, 0.1),
						0 50px 100px -20px rgba(0, 0, 0, 0.5)
					`
				}}
			>

				{/* === Navbar Inside Card === */}
				<nav className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 z-20 w-[95%] sm:w-[90%] md:w-[85%] flex justify-center">
					<div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-6 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 max-w-[750px] w-full bg-[rgba(20,20,20,0.85)] backdrop-blur-2xl border border-white/15 rounded-lg sm:rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
						<a href="#home" className="text-base sm:text-lg md:text-xl font-semibold text-white shrink-0">NEVIX.</a>
						<ul className="hidden md:flex gap-4 lg:gap-6 text-gray-300 text-sm">
							{navLinks.map((link) => (
								<li key={link.id}>
									<a href={`#${link.id}`} className="hover:text-white transition duration-300 whitespace-nowrap">{link.title}</a>
								</li>
							))}
						</ul>
						<a href="#contact" className="bg-white text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 transition duration-300 shrink-0 whitespace-nowrap">Get In Touch</a>
					</div>
				</nav>

				{/* === Background Video === */}
				<video
					ref={videoRef}
					muted
					playsInline
					preload="auto"
					autoPlay
					loop
					className="absolute inset-0 w-full h-full object-cover"
					src="/videos/output.mp4"
				/>

				{/* === Dark Overlay === */}
				<div className="absolute inset-0 bg-black/60"></div>

				{/* === Content === */}
				<div className="relative z-10 w-full h-full flex flex-col justify-between px-4 sm:px-6 md:px-9 pt-16 sm:pt-20 md:pt-24 pb-4 sm:pb-6">

					{/* Main Title - Centered */}
					<div className="relative z-10 w-full h-full flex items-start justify-center pt-6 sm:pt-8 md:pt-11 text-center px-2 sm:px-4 md:px-6">

						<div>
							<h1 className="title text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mb-4 sm:mb-6 text-white">
								NEVIX
							</h1>
						</div>
					</div>

					{/* Bottom Section */}
					<div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 sm:gap-0 px-2 sm:px-4">
						{/* Bottom Left Text */}
						<div className="text-center sm:text-left">
							<p className="subtitle text-gray-300" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '13px' }}>
								<span className="hidden sm:inline">Build the Future of <br /> Digital Commerce.</span>
								<span className="sm:hidden">Build the Future of Digital Commerce.</span>
							</p>
						</div>

						{/* Bottom Right Text */}
						<div className="text-center sm:text-right max-w-sm">
							<p className="subtitle text-gray-300" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '13px' }}>
								<span className="hidden sm:inline">We engineer growth <br /> for modern brands.</span>
								<span className="sm:hidden">We engineer growth for modern brands.</span>
							</p>
						</div>

						{/* Scroll to explore text */}
						<div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 text-gray-400 text-[10px] sm:text-xs tracking-widest uppercase flex flex-col items-center gap-1 sm:gap-2 animate-bounce">
							<span>Scroll to explore</span>
							<svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
							</svg>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
};

export default Hero;
