import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.App}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
