import styles from './styles.module.css';

interface IconProps {
	variant: 'cart' | 'plus' | 'minus' | 'close' | 'delete' | 'menu' | 'next' | 'previous';
	size: number;
}

const Icon = ({ variant, size }: IconProps) => {
	return (
		<div
			style={{ height: size, width: size }}
			className={`${styles.icon} ${styles[`icon--${variant}`]}`}
		></div>
	);
};

export default Icon;
