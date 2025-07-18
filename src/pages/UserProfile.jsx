import { useAuth } from "../hooks/useAuth";


const UserProfile = () => {
  const { userProfile } = useAuth();

  return (
    <div>
      <h2>Bienvenido a tu espacio, {userProfile?.nombre}</h2>
      <p>Aquí podrás gestionar tu información personal y ver tus pedidos.</p>
    </div>
  );
};

export default UserProfile;
