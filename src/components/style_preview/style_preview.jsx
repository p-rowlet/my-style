import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "./style_preview.module.css";

const StylePreview = (props) => {
	return (
		<article className={styles.content_box}>
			<div className={styles.preview_img}></div>
			<div className={styles.preview_content}>
				<div className={styles.title}>
					<h2>스타일 이름</h2>
					<FontAwesomeIcon icon={faXmark} size="2x"/>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Eius voluptatem veniam eos culpa eum veritatis ipsum cum
					nostrum beatae! Voluptatibus incidunt repudiandae dolores
					quae dolorum tenetur ab obcaecati, quam assumenda, soluta
					temporibus animi. Temporibus itaque molestias repellendus
					qui, natus dolore.
				</p>
			</div>
		</article>
	);
};

export default StylePreview;
