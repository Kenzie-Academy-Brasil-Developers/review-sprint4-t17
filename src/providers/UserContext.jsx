import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

//Lado de fora de função de componente
export const UserContext = createContext({});

// Um para cada não VAI no contexto
// Um para todos VAI no contexto

//O provider ele é um componente
export const UserProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   const navigate = useNavigate();

   const userRegister = async (formData) => {
      try {
         const body = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            job: formData.job,
         };
         await api.post("/users", body);
         console.log("Cadastro efetuado com sucesso!");
         navigate("/success");
      } catch (error) {
         console.log(error);
      }
   };

   const userLogin = async (formData, setLoading) => {
      try {
         setLoading(true);
         const { data } = await api.post("/login", formData);
         localStorage.setItem("@TOKEN", data.accessToken);
         localStorage.setItem("@USERID", data.user.id);
         setUser(data.user);
         navigate("/dashboard");
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   //O oposto da função de login
   const userLogout = () => {
      localStorage.removeItem("@TOKEN");
      localStorage.removeItem("@USERID");
      setUser(null);
      navigate("/");
   };

   return (
      <UserContext.Provider value={{ user, userRegister, userLogin, userLogout }}>
         {children}
      </UserContext.Provider>
   );
};