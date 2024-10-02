/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = document.cookie.split("=")[0];
    if (token) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="container px-0 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
