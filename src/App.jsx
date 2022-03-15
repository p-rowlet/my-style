import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import StyleList from "./components/style_list/style_list";
import WriteStyle from "./components/write_style/write_style";
import React from "react";
import NoMatch from "./components/nomatch/nomatch";

function App({ authService }) {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Login authService={authService} />}
					/>
					<Route
						path="/list"
						element={<StyleList authService={authService} />}
					/>
					<Route
						path="/post"
						element={<WriteStyle authService={authService} />}
					/>
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
