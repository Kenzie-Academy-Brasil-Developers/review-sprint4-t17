import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

export const DashboardPage = () => {
    const { user, userLogout } = useContext(UserContext);

    return(
        <main>
            <button onClick={() => userLogout()}>Sair</button>
            <h1>{user?.name} - {user?.job}</h1>
            <p>{user?.email}</p>
        </main>
    )
}