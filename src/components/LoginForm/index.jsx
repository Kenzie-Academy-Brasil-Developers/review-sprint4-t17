import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { UserContext } from "../../providers/UserContext";
import { Input } from "../Input";

export const LoginForm = () => {
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const { userLogin } = useContext(UserContext);

    const submit = (formData) => {
        userLogin(formData, setLoading);
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <h1>Faça Login</h1>
            <Input type="text" placeholder="Seu e-mail" {...register("email")} disabled={loading} />
            <Input type="password" placeholder="Sua senha" {...register("password")} disabled={loading} />
            <button type="submit" disabled={loading}>
                {loading ? "Entrando..." : "Entrar"}
            </button>
        </form>
    )
}