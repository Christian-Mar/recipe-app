import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebar_content}>
				<div className={styles.user}>
					{/* avatar and username here */}
					<p>Hello user</p>
				</div>
				<nav className={styles.links}>
					<ul>
						<li>
							<NavLink to='/dashboard'>
								<span>Dashboard</span>
							</NavLink>
						</li>
						<li>
							<NavLink to='/create'>
								<span>Nieuw recept</span>
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
