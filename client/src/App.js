import "./App.scss";
import Home from "./components/home";
import Register from "./components/register";
import Login from "./components/login";
import AboutUs from "./components/aboutus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogsPage from "./components/blogs";
import Scrolltotop from "./components/scrolltotop";
import BlogLinks from "./components/blog-links";
import ContactUs from "./components/contactus";

function App() {
  return (
    <div className="App">
      <div className="above-the-fold-spacer"></div>
      <BrowserRouter>
        <Scrolltotop />
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Register />} path="register"></Route>
          <Route element={<Login />} path="login"></Route>
          <Route element={<AboutUs />} path="aboutus"></Route>
          <Route element={<BlogsPage />} path="blogs"></Route>
          <Route element={<BlogLinks />} path="blogs/:blogId"></Route>
          <Route element={<ContactUs />} path="contactus"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
