import React from "react";
import styles from "./login.module.css";

const Login = (props) => {
	return (
		<section>
			<div className={styles.introduce}>
				<h1>나만의 스타일 시안을 구상해보세요!</h1>
				<div className={styles.login}>
					<button><img src="images/google_logo.png" alt="" /> Google 계정으로 로그인</button>
					<button><img src="images/twitter_logo.png" alt="" /> 트위터 계정으로 로그인</button>
					<button><img src="images/facebook_logo.png" alt="facebook_logo" /> 페이스북 계정으로 로그인</button>
				</div>
			</div>
		</section>
	);
};

export default Login;
