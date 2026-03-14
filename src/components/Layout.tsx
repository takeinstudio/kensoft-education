import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";

const Layout = () => (
  <>
    <ScrollProgress />
    <TopBar />
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
