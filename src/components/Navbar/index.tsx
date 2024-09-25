import Cart from '../Cart';
import Menu from '../Menu';
import styles from './styles.module.css';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.nav_menu}>
				<Menu />
			</div>
			<div className={styles.nav_logo}>
				<img src='icons/logo.svg' alt='Logo Image' />
			</div>
			<div className={styles.nav_links}>
				<a href='#'>Collections</a>
				<a href='#'>Men</a>
				<a href='#'>Women</a>
				<a href='#'>About</a>
				<a href='#'>Contact</a>
			</div>
			<div className={styles.nav_profile}>
				<Cart />
				<img className={styles.profile_avatar} src='images/image-avatar.png' alt='Avatar Image' />
			</div>
		</nav>
	);
};

export default Navbar;
