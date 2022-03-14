import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import StyleList from "./components/style_list/style_list";
import WriteStyle from "./components/write_style/write_style";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import React, { useCallback } from "react";
import NoMatch from "./components/nomatch/nomatch";

function App({ authService }) {
	const onLogout = useCallback(() => {
		authService.logout();
	}, [authService]);

	return (
		<>
			<Header onLogout={onLogout} />
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Login authService={authService} />}
					/>
					<Route path="/list" element={<StyleList authService={authService}/>} />
					<Route path="/post" element={<WriteStyle />} />
					<Route path="*" element={<NoMatch />}/>
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
