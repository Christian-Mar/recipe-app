import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../images/logo.svg'

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li className={styles.logo}>
				 <img src={logo} alt=""/>
				</li>
				<li>
					<NavLink to='/' className={styles.navlink}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/dashboard' className={styles.navlink}>
						Dashboard
					</NavLink>
				</li>
				<li>
					<NavLink to='/signup' className={styles.navlink}>
						Signup
					</NavLink>
				</li>
				<li>
					<NavLink to='/login' className={styles.navlink}>
						Login
					</NavLink>
				</li>
				<li>
					<button className={styles.btn}>Logout</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
