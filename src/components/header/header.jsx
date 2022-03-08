import React from "react";
import styles from "./header.module.css";
import logo from "./../../logo.svg";

const Header = (props) => {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<img className={styles.logoimg} src={logo} alt="MyStyle 로고" />
				<button className={styles.logout}>Logout</button>
			</div>
		</header>
	);
};

export default Header;
