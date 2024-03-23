// eslint-disable-next-line no-unused-vars
import React from 'react'

function About() {
	return (
		<div className='w-full p-20 bg-[#CDEA68] rounded-tr-3xl text-black'>
			<h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
				Ochi is a strategic partner for fast-growing tech businesses that need
				to raise funds, sell products, exxplain complex ideas, and hire great people.
			</h1>
			<div className="w-full border-t-[1px] mt-20 border-[#636559]">
				<h2 className="font-['Neue_Montreal'] text-[1.6vw] leading-[4.8vw] ">
					What you can expect:
				</h2>
				<div className="md:col-span-4 lg:col-span-4 reset-last">
					<div className="wysiwyg reset-last max-w-275 ">
						<p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it is live or digital, delivered for one or a hundred people. </p>
						<p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
						<div className="md:col-span-4 lg:col-span-2 reset-last md:items-end md:justify-end md:flex laptop:justify-start">
							<div>
								<p className="mb-15">S:</p>
								<ul className="social-list leading-loose social-list--default">
									<li className="social-list__item">
										<a className="social-list__link link link--underline" href="https://www.instagram.com/ochi_design/">
											Instagram												</a>
									</li>
									<li className="social-list__item">
										<a className="social-list__link link link--underline" href="https://www.behance.net/ochi_design">
											Behance												</a>
									</li>
									<li className="social-list__item">
										<a className="social-list__link link link--underline" href="https://www.facebook.com/OCHI-presentation-design-103605044779378/">
											Facebook												</a>
									</li>
									<li className="social-list__item">
										<a className="social-list__link link link--underline" href="https://www.linkedin.com/company/56403597">
											Linkedin												</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#636559]">
					<div className="w-1/2 ">
						<h1>Our Approach</h1>
						<button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">Read More
							<div className="w-2 h-2 bg-zinc-100 rounded-full"> </div>
                      
						</button>
					</div>
					<div className="w-1/2 h-[70vh] rounded-3xl bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')]">
					
					

				</div>

			</div>
			</div>
			</div>
		
		

	)
}

export default About;