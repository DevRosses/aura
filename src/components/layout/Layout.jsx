import Navbar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main
        className="d-flex flex-column flex-grow-1"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
