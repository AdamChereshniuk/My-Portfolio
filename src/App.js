import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./utils/scrollToTop";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import Home from "./pages/Home";
import "./styles/main.css";

function App() {
  return (
	<div className="App">
		<BrowserRouter basename={import.meta.url.basename}>
			<ScrollToTop />
			<Navbar />
			<Routes>
				<Route path="/My-Portfolio" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/project/:id" element={<Project />} />
				<Route path="/contacts" element={<Contacts />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	</div>
  );
};

export default App;