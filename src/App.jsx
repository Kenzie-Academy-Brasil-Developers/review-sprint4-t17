import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import { RoutesMain } from "./routes/RoutesMain";

function App() {
   const { loading } = useContext(UserContext);
   
   return <div className="App">{loading ? <p>Carregando...</p> : <RoutesMain />}</div>;
}

export default App;
