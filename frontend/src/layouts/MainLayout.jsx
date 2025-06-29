// eslint-disable-next-line no-unused-vars
import { Outlet } from "react-router";
// eslint-disable-next-line no-unused-vars
import Navbar from "../components/Navbar.jsx";
// import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
