import { AnimatePresence, motion } from 'framer-motion';
import style from './Accordion.module.scss';
type AccordionPropsType = {
	i: number;
	expanded: false | number;
	setExpanded: Function;
};

export const Accordion = ({ i, expanded, setExpanded }: AccordionPropsType) => {
	const isOpen = i === expanded;

	return (
		<>
			<motion.header
				className={style['accordion-header']}
				initial={false}
				onClick={() => setExpanded(isOpen ? false : i)}
			/>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.section
						key="content"
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: { opacity: 1, height: 'auto' },
							collapsed: { opacity: 0, height: 0 },
						}}
						transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
					>
						<h2 style={{ color: 'white' }}>TEST</h2>
					</motion.section>
				)}
			</AnimatePresence>
		</>
	);
};
