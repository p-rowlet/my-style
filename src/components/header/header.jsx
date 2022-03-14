import React from "react";
import styles from "./header.module.css";
import logo from "./../../logo.svg";

const Header = ({ onLogout }) => {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<a href="/">
					<img
						className={styles.logoimg}
						src={logo}
						alt="MyStyle 로고"
					/>
				</a>

				{onLogout && (
					<button className={styles.logout} onClick={onLogout}>
						Logout
					</button>
				)}
			</div>
		</header>
	);
};

export default Header;
