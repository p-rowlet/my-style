import React from "react";
import styles from "./login.module.css";

const Login = (props) => {
	return (
		<section>
			<div className={styles.introduce}>
				<h1>나만의 스타일 시안을 구상해보세요!</h1>
				<div className={styles.login}>
					<button><img src="images/google_logo.png" alt="google_logo" /> Google 계정으로 로그인</button>
					<button><img src="images/github_logo.png" alt="github_logo" /> Github 계정으로 로그인</button>
					<button><img src="images/facebook_logo.png" alt="facebook_logo" /> Facebook 계정으로 로그인</button>
				</div>
			</div>
		</section>
	);
};

export default Login;
