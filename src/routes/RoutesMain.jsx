import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { SuccessPage } from "../pages/SuccessPage";

export const RoutesMain = () => {
   //const [user, setUser] = useState(null);

   return (
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/register" element={<RegisterPage />} />
         <Route path="/success" element={<SuccessPage />} />
         <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
   );
};
