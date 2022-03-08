import React from "react";
import StylePreview from "../style_preview/style_preview";
import styles from "./style_list.module.css";

const StyleList = (props) => {
	return (
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
	);
};

export default StyleList;
