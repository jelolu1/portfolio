import githubLogo from '../assets/github_logo.webp';
import lolImg from '../assets/project_lol.png';
import style from './Portfolio.module.scss';

export const Portfolio = () => {
	return (
		<div className={style['portfolio-container']}>
			<h2 className={style['section-title']}>Portfolio</h2>
			<div className={style['project']}>
				<img className={style['project-img']} src={lolImg} />
				<div className={style['project-description']}>
					<div className={style['project-title']}>
						<h2>League of Legeds Champion Rotation App</h2>
						<img
							className={style['github-img']}
							src={githubLogo}
							alt="git hub repo"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
