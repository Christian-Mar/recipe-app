import { useState } from 'react';
import styles from './Signup.module.css';

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
 return (
		<form className={styles.form}>
			<h2>Sign up</h2>
			<label>
				<span>E-mail:</span>
				<input
					required
					type='email'
					onChange={e => setEmail(e.target.value)}
					value={email}
				/>
			</label>
			<label>
				<span>Paswoord</span>
				<input
					required
					type='password'
					onChange={e => setPassword(e.target.value)}
					value={password}
				/>
			</label>
			<label>
				<span>Naam: </span>
				<input
					required
					type='text'
					onChange={e => setDisplayName(e.target.value)}
					value={displayName}
				/>
			</label>
			<label>
				<span>Foto:</span>
				<input
					required
					type='file'
				/>
			</label>
		</form>
 );
}

export default Signup;