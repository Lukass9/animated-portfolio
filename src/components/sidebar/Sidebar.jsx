import './sidebar.scss';
import { Links } from './links/Links';
import { ToggleButtons } from './toggleButton/ToggleButtons';

export const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='bg'>
				<Links />
			</div>
			<ToggleButtons />
		</div>
	);
};
