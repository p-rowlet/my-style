import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StylePreview from "../style_preview/style_preview";
import styles from "./style_list.module.css";
import Header from "../header/header";
import Footer from "../footer/footer"

const StyleList = ({ authService }) => {
	const onLogout = useCallback(() => {
		authService.logout();
	}, [authService]);

	const location = useLocation();
	const locationState = location?.state;
	const navigate = useNavigate();

	const [userId, setUserId] = useState(locationState && locationState.id);

	useEffect(() => {
		authService.onAuthChange((user) => {
			if (user) {
				setUserId(user.uid);
			} else {
				navigate("/");
			}
		});
	}, [userId, navigate, authService]);

	return (
		<>
			<Header onLogout={onLogout}/>
			<section className={styles.section}>
				<div className={styles.list}>
					<div className={styles.title}>
						<h1>나의 스타일 목록</h1>
						<button className={styles.add}>추가하기</button>
					</div>
					<StylePreview />
					<StylePreview />
					<StylePreview />
					<StylePreview />
				</div>
			</section>
			<Footer />
		</>
	);
};

export default StyleList;
