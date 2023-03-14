import userImg from '../assets/th.webp';
import { Stack } from './Stack';
import style from './Welcome.module.scss';

export const Welcome = () => {
	return (
		<div className={style.container}>
			<div className={style['user-container']}>
				<img src={userImg} alt="user" className={style['user-img']} />

				<div className={style['name-container']}>
					<h1>Jesús Lorenzo Lucas</h1>
					<h2>
						<span className={style['front-end-span']}>
							Front End Developer{' '}
						</span>
						+{' '}
						<span className={style['electronic-engineer-span']}>
							Electronic Engineer
						</span>
					</h2>
				</div>
				<Stack />
			</div>
		</div>
	);
};
