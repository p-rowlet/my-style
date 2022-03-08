import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import StyleList from "./components/style_list/style_list";
import WriteStyle from "./components/write_style/write_style";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
	return (
		<>
      <Header />
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/list" element={<StyleList />} />
					<Route path="/write" element={<WriteStyle />} />
				</Routes>
			</BrowserRouter>
      <Footer />
		</>
	);
}

export default App;
