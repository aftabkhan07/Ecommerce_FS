// components/Header.tsx
import React from 'react';
// import { useSelector } from 'react-redux';

import styles from './Header.module.css'; // Import CSS module for styling
import { FaUserCircle } from 'react-icons/fa'; // Import an icon for the user
import { useRouter } from 'next/navigation';
import { User } from '../store/authSlice';

interface HeaderProps {
    user: {
      name: string;
    } | null; // Define the user prop type
  }

const Header: React.FC<HeaderProps> = ( {user}) => {
//   const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  const dashboard = () => router.push('/dashboard')
  const cart = () => router.push('/cart')

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h2>My eCommerce</h2>
      </div>
      <nav className={styles.nav}>
        <ul>
          <button><a href="/">Home</a></button>
          <button onClick={dashboard} cursor-pointer="true">Dashboard</button>
          <button><a onClick = {cart}>Cart</a></button>
        </ul>
      </nav>
      {user && (
        <div className={styles.userProfile}>
          <FaUserCircle size={30} />
          <span className={styles.userName}>{user.name}</span>
        </div>
      )}
    </header>
  );
};

export default Header;
