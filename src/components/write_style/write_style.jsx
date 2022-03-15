import React, { useCallback } from "react";
import styles from "./write_style.module.css";
import Header from "../header/header";

const WriteStyle = ({authService}) => {

	const onLogout = useCallback(() => {
		authService.logout();
	}, [authService]);

	return (
		<>
			<Header onLogout={onLogout} />
			<section className={styles.section}>
				<article className={styles.editor}>
					<textarea
						className={styles.title}
						type="text"
						name="title"
						rows="1"
						placeholder="스타일의 이름을 작성하세요."
					/>
					<div className={styles.content}>
						<div className={styles.logo}>
							<div className={styles.main_logo}>
								<p>Main Logo</p>
								<img src="logo192.png" alt="로고영역" />
								<button>파일 선택</button>
							</div>
							<div className={styles.sub_logo}>
								<p>Sub Logo</p>
								<img src="logo192.png" alt="로고영역" />
								<button>파일 선택</button>
							</div>
						</div>
						<div className={styles.pattern}>
							<p>Pattern</p>
							<img src="logo192.png" alt="패턴영역" />
							<button>파일 선택</button>
						</div>
						<div className={styles.color}>
							<p>color</p>
							<input
								type="text"
								className={styles.color_code}
								placeholder="색상코드 입력"
							/>
							<button>확인</button>
						</div>
						<div className={styles.font}>
							<p>Font</p>
							<input
								type="text"
								className={styles.font_text}
								placeholder="Lorem Ipsum"
							/>
							<button>파일 업로드</button>
						</div>
						<textarea
							className={styles.description}
							rows="4"
							name="description"
							placeholder="스타일 설명을 입력하세요"
						></textarea>
					</div>
					<div className={styles.menu}>
						<button className={styles.save}>저장</button>
						<button className={styles.cancel}>취소</button>
					</div>
				</article>
			</section>
		</>
	);
};

export default WriteStyle;
