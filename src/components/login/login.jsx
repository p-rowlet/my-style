import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
	const navigate = useNavigate();
	const goToStyle = (userId) => {
		navigate("/list", { state: { id: userId } });
	};

	const onLogin = (e) => {
		authService
			.login(e.currentTarget.dataset.provider)
			.then((data) => goToStyle(data.user.uid))
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		authService.onAuthChange((user) => {
			user && goToStyle(user.uid);
		});
	});

	return (
		<>
			<Header />
			<section>
				<div className={styles.introduce}>
					<h1>나만의 스타일 시안을 구상해보세요!</h1>
					<div className={styles.login}>
						<button data-provider="Google" onClick={onLogin}>
							<img
								src="images/google_logo.png"
								alt="google_logo"
							/>
							Google 계정으로 로그인
						</button>
						<button data-provider="Github" onClick={onLogin}>
							<img
								src="images/github_logo.png"
								alt="github_logo"
							/>
							Github 계정으로 로그인
						</button>
						<button data-provider="Facebook" onClick={onLogin}>
							<img
								src="images/facebook_logo.png"
								alt="facebook_logo"
							/>
							Facebook 계정으로 로그인
						</button>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Login;
