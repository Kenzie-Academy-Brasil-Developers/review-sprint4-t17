import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const SuccessPage = () => {
    /*
        //Boleanos para situações de verdadeiro ou falso
        const [loading, setLoading] = useState(false);
        //Array para estados que vão armazenar listas
        const [techList, setTechList] = useState([]);
        //Null para estados que vão armazenar objetos
        const [user, setUser] = useState(null);
    */

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 3 * 1000);
    }, [])

    // onMount
    // onUpdate
    // onDismount

    return(
        <div>
            <h1>Cadastro efetuado com sucesso!</h1>
            <p>Você será redirecionado em 3 segundos</p>
        </div>
    )
}