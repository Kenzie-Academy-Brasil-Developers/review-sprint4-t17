import { Link } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm"

export const HomePage = () => {
    return(
        <div>
            <h1>Seja bem vindo!</h1>
            <LoginForm />
            <p>Clique no botão abaixo para cadastrar:</p>
            { /* Link é utilizado para o redirecionamento interno, ou seja rotas criadas pela React Router Dom */}
            <Link to="/register">Cadastrar-se</Link>
            <hr />
            <p>Ou acesse nossas redes sociais</p>
            <ul>
                <li>
                    <a href="#" target="_blank">Facebook</a>
                </li>
                <li>
                    <a href="#"  target="_blank">Instagram</a>
                </li>
                <li>
                    <a href="#" target="_blank">Linkedin</a>
                </li>
            </ul>
        </div>
    )
}