import { useState } from 'react';

import Icon from '../Icon';
import styles from './styles.module.css';

const Menu = () => {
	const [open, setOpen] = useState(false);

	if (!open)
		return (
			<button aria-label='menu_icon_button' onClick={() => setOpen(true)}>
				<Icon variant={'menu'} size={20} />
			</button>
		);

	return (
		<div className={styles.menu_container}>
			<div className={styles.menu}>
				<button aria-label='close_icon_button' onClick={() => setOpen(false)}>
					<Icon variant={'close'} size={16} />
				</button>
				<a href='#'>Collections</a>
				<a href='#'>Men</a>
				<a href='#'>Women</a>
				<a href='#'>About</a>
				<a href='#'>Contact</a>
			</div>
		</div>
	);
};

export default Menu;
