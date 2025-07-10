import NavbarTop from "./NavbarTop";
import NavbarBottom from "./NavbarBottom";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarTop />
      <main
        className="container py-4"
        style={{ paddingBottom: "80px", flex: 1 }}
      >
        {children}
      </main>
      <Footer />
      <NavbarBottom />
    </div>
  );
};

export default Layout;
