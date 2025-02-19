import './sidebar.scss';
import { motion } from 'framer-motion';
import { Links } from './links/Links';
import { ToggleButtons } from './toggleButton/ToggleButtons';
import { useState } from 'react';

const variants = {
	open: {
		clipPath: 'circle(1200px at 50px 50px)',
		transition: {
			type: 'spring',
			stiffness: 15,
		},
	},
	closed: {
		clipPath: 'circle(30px at 50px 50px)',
		transition: {
			delay: 0.2,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};

export const Sidebar = () => {
	const [open, setOpen] = useState(false);

	return (
		<motion.div className='sidebar' animate={open ? 'open' : 'closed'}>
			<motion.div className='bg' variants={variants}>
				<Links />
			</motion.div>
			<ToggleButtons setOpen={setOpen} />
		</motion.div>
	);
};
