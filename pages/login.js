import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css';

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Perform login logic here (e.g., validate credentials, authenticate user)
        // For simplicity, we'll just navigate to the record search page
        router.push('/record-search');
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <div className={styles.imageContainer}>
                    <img src={'user.png'} alt="User Avatar" className={styles.avatar} />
                </div>
                <h2>Login to Your Account</h2>
                <form onSubmit={handleLogin}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Login
                    </button>
                </form>
                <div className={styles.linkGroup}>
                    <a href="/forgot-password">Forgot Password?</a>
                    <a href="/register">Register</a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
