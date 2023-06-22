import { Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { DashboardPage } from "../pages/DashboardPage";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { SuccessPage } from "../pages/SuccessPage";
import { NewsProvider } from "../providers/NewsContext";
import { ExamplePage } from "../pages/ExamplePage";

export const RoutesMain = () => {
   //const [user, setUser] = useState(null);

   return (
      <Routes>
         <Route path="/success" element={<SuccessPage />} />

         <Route element={<PublicRoutes />}>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
         </Route>

         <Route element={<ProtectedRoutes />}>
            <Route
               path="/dashboard"
               element={
                  <NewsProvider>
                     <DashboardPage />
                  </NewsProvider>
               }
            />
            <Route path="/example" element={<ExamplePage />} />
         </Route>
      </Routes>
   );
};
