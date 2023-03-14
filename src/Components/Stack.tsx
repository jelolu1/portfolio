import { motion } from 'framer-motion';
import awsLogo from '../assets/aws_logo.webp';
import cppLogo from '../assets/cpp_logo.png';
import cssLogo from '../assets/CSS3_logo.svg';
import framerMotionLogo from '../assets/framer_motion_logo.svg';
import htmlLogo from '../assets/HTML5_logo.svg';
import jsLogo from '../assets/JavaScript_logo.png';
import pythonLogo from '../assets/python_logo.png';
import reactLogo from '../assets/React_logo.svg';
import rosLogo from '../assets/ros_logo.png';
import sassLogo from '../assets/sass_logo.png';
import tsLogo from '../assets/typescript_logo.svg';
import style from './Stack.module.scss';

export const Stack = () => {
	return (
		<div className={style.stack}>
			<h2>Front End Tech Stack</h2>
			<div className={style.logos}>
				<motion.img
					whileHover={{ scale: 1.2 }}
					whileTap={{
						scale: 1,
					}}
					src={htmlLogo}
					alt="html logo"
					height="80"
				/>
				<motion.img
					whileHover={{ scale: 1.2 }}
					whileTap={{
						scale: 1,
					}}
					src={cssLogo}
					alt="css3 logo"
					height="80"
				/>
				<motion.img
					whileHover={{ scale: 1.2 }}
					whileTap={{
						scale: 1,
					}}
					src={jsLogo}
					alt="javascript logo"
					height="80"
				/>
				<motion.img
					whileHover={{ scale: 1.2 }}
					whileTap={{
						scale: 1,
					}}
					src={tsLogo}
					alt="typescript logo"
					height="80"
				/>
				<motion.img
					whileHover={{ scale: 1.2 }}
					whileTap={{
						scale: 1,
					}}
					src={reactLogo}
					alt="react logo"
					height="80"
				/>
				<motion.img
					whileHover={{ scale: 1.2 }}
					whileTap={{
						scale: 1,
					}}
					src={framerMotionLogo}
					alt="framer motion logo"
					height="80"
				/>

				<motion.img
					whileHover={{ scale: 1.2 }}
					whileTap={{
						scale: 1,
					}}
					src={sassLogo}
					alt="sass logo"
					height="80"
				/>
			</div>
			<h2>Embedded Systems Tech Stack</h2>
			<div className={style.logos}>
				<motion.img
					whileHover={{ scale: 1.2 }}
					whileTap={{
						scale: 1,
					}}
					src={cppLogo}
					alt="c plus plus logo"
					height="80"
				/>
				<motion.img
					whileHover={{ scale: 1.2 }}
					whileTap={{
						scale: 1,
					}}
					src={pythonLogo}
					alt="python logo"
					height="80"
				/>
				<motion.img
					whileHover={{ scale: 1.2 }}
					whileTap={{
						scale: 1,
					}}
					src={awsLogo}
					alt="amazon web services logo"
					height="80"
				/>
				<motion.img
					whileHover={{ scale: 1.2 }}
					whileTap={{
						scale: 1,
					}}
					src={rosLogo}
					alt="robotic operating system logo"
					height="80"
				/>
			</div>
		</div>
	);
};
