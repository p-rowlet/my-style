import React from "react";
import styles from "./nomatch.module.css";

const NoMatch = (props) => {
	return (
		<section className={styles.section}>
            <img src="images/error.png" alt="에러 메시지"/>
			<div className={styles.message}>
				<h1>404 : Not Found</h1>
                <p>현재 페이지를 찾을 수 없습니다.</p>
			</div>
		</section>
	);
};

export default NoMatch;
