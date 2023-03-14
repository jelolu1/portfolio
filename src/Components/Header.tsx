import style from './Header.module.scss';

export const Header = () => {
	return (
		<header className={style.header}>
			<button>Home</button>
			<button>Portfolio</button>
			<button>Contact</button>
		</header>
	);
};
