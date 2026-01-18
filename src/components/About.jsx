import gsap from 'gsap';
import { SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'

const About = () => {
	useGSAP(() => {
		// Title animation
		const titleSplit = SplitText.create('#about h1', {
			type: 'chars, words'
		})

		gsap.from(titleSplit.chars, {
			scrollTrigger: {
				trigger: '#about',
				start: 'top 80%',
				end: 'top 30%',
				scrub: 1,
			},
			opacity: 0,
			yPercent: 100,
			rotateX: -90,
			stagger: 0.02,
		})

		// Subtitle animation
		gsap.from('.about-subtitle', {
			scrollTrigger: {
				trigger: '#about',
				start: 'top 70%',
				end: 'top 40%',
				scrub: 1,
			},
			opacity: 0,
			y: 30,
		})

		// Card slide up animation
		gsap.from('.about-card', {
			scrollTrigger: {
				trigger: '.about-card',
				start: 'top 90%',
				end: 'top 50%',
				scrub: 1,
			},
			opacity: 0,
			y: 100,
			scale: 0.95,
		})

		// Badge animation
		gsap.from('.about-badge', {
			scrollTrigger: {
				trigger: '.about-card',
				start: 'top 70%',
				end: 'top 50%',
				scrub: 1,
			},
			opacity: 0,
			x: -50,
		})

		// Description text animation
		gsap.from('.about-description', {
			scrollTrigger: {
				trigger: '.about-description',
				start: 'top 85%',
				end: 'top 60%',
				scrub: 1,
			},
			opacity: 0,
			y: 40,
		})

		// Quote animation
		gsap.from('.about-quote', {
			scrollTrigger: {
				trigger: '.about-quote',
				start: 'top 85%',
				end: 'top 60%',
				scrub: 1,
			},
			opacity: 0,
			x: -30,
		})

		// Image animation
		gsap.from('.about-image', {
			scrollTrigger: {
				trigger: '.about-image',
				start: 'top 85%',
				end: 'top 50%',
				scrub: 1,
			},
			opacity: 0,
			x: 100,
			scale: 0.9,
		})

		// Dotted background animation
		gsap.from('.about-dots', {
			scrollTrigger: {
				trigger: '#about',
				start: 'top 90%',
				end: 'top 40%',
				scrub: 1,
			},
			opacity: 0,
			scale: 1.2,
		})
	})

	return (
		<section 
			id="about" 
			className="relative py-20 px-4 md:px-8 lg:px-16 bg-black min-h-screen"
		>
			{/* Dotted Background Pattern - Fades from bottom */}
			<div 
				className="about-dots absolute inset-0"
				style={{
					backgroundImage: `radial-gradient(circle, #595959 2px, transparent 2px)`,
					backgroundSize: '50px 50px',
					maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 70%)',
					WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 70%)',
				}}
			></div>

			<div className="relative z-10">
				{/* Header */}
				<div className="text-center mb-12">
					
					<p className="about-subtitle text-gray-400 text-lg md:text-xl">
						Where vision meets execution.
					</p>
				</div>

				{/* Content */}
				<div className="about-card max-w-6xl mx-auto p-4 md:p-8">
					<div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
						
						{/* Left Content */}
						<div className="flex-1 space-y-6">
							

							{/* Description */}
							<p className="about-description text-gray-300 text-base md:text-lg leading-relaxed">
								At NEVIX, we focus on building high-performance ecommerce and mobile apps that redefine digital standards. Our team blends technical mastery with creative vision to deliver solutions that scale effortlessly.
							</p>

							{/* Quote */}
							<p className="about-quote text-white text-xl md:text-2xl font-semibold italic leading-snug">
								"We don't just build websites. We engineer digital growth."
							</p>
						</div>

						{/* Right Image - In Card */}
						<div className="about-image flex-1 w-full">
							<div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0a1628]/80 to-[#0d0d0d]/90 p-2">
								<img 
									src="/images/abt2.png" 
									alt="3D Visualization" 
									className="w-full h-64 md:h-80 object-cover rounded-xl"
								/>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}
export default About
