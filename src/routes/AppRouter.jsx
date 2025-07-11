import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import ProtectedRoute from "./ProtectedRoute";

// Importa las páginas
import Home from "../pages/HomePage";
import Products from "../pages/ProductsPage";
import Login from "../pages/LoginPage";
import Register from "../pages/RegistrationPage";
import Cart from "../pages/CartPage";
import Payment from "../pages/PaymentPage";
import ProductDetails from "../pages/ProductDetailPage";
import Dashboard from "../pages/Dashboard";
import AdminDashboard from "../pages/DashboardAdminPage";
import UserDashboard from "../pages/DashboardUserPage";
import ContactUs from "../pages/ContactUsPage";
import AboutUs from "../pages/AboutUsPage";
import Rituals from "../pages/RitualsPage";
import AdminLayout from "../components/admin/AdminLayout";
import ProductsAdminPage from "../pages/admin/ProductsAdminPage";
import UsersAdminPage from "../pages/admin/UsersAdminPage";
import PermissionsAdminPage from "../pages/admin/PermissionsAdminPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.PRODUCTS} element={<Products />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetails />} />
      <Route path={ROUTES.CONTACT_US} element={<ContactUs />} />
      <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
      <Route path={ROUTES.RITUALS} element={<Rituals />} />
      <Route
        path={ROUTES.DASHBOARD}
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.ADMIN_DASHBOARD}
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path={ROUTES.ADMIN_PRODUCTS}
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<ProductsAdminPage />} />
      </Route>

      <Route
        path={ROUTES.ADMIN_USERS}
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<UsersAdminPage />} />
      </Route>

      <Route
        path={ROUTES.ADMIN_SETTINGS}
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<PermissionsAdminPage />} />
      </Route>

      <Route
        path={ROUTES.USER_DASHBOARD}
        element={
          <ProtectedRoute allowedRole="user">
            <UserDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path={ROUTES.PAYMENT}
        element={
          <ProtectedRoute allowedRole="user">
            <Payment />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
