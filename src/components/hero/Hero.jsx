import './hero.scss';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<div className='hero'>
			<div className='wrapper'>
				<div className='textContainer' initial='initial'>
					<h2>HARVEY TYLER</h2>
					<h1>Web developer and UI designer</h1>
					<div className='buttons'>
						<button>See the Latest Works</button>
						<button>Contact Me</button>
					</div>
					<img src='/scroll.png' alt='' />
				</div>
			</div>
			<div className='slidingTextContainer' initial='initial'>
				Writer Content Creator Influencer
			</div>
			<div className='imageContainer'>
				<img src='/hero.png' alt='' />
			</div>
		</div>
	);
};

export default Hero;
