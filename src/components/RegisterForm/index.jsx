import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { Input } from "../Input";
import { Select } from "../Select";
import { isEmpty } from "../../utils/isEmpty";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";

/*
{
   "name": "John Doe",
   "email": "johndoe@email.com",
   "password": "123456",
   "job": "Jornalista"
}
*/

export const RegisterForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: zodResolver(registerFormSchema),
   });

   const { userRegister } = useContext(UserContext);

   const submit = (formData) => {
      userRegister(formData);
   };

   const isErrors = isEmpty(errors);

   return (
      <form onSubmit={handleSubmit(submit)} noValidate>
         <Input
            type="text"
            placeholder="Seu nome"
            {...register("name")}
            error={errors.name}
         />

         <Input
            type="email"
            placeholder="Seu e-mail"
            {...register("email")}
            error={errors.email}
         />

         <Input
            type="password"
            placeholder="Crie uma senha"
            {...register("password")}
            error={errors.password}
         />

         <Input
            type="password"
            placeholder="Confirme sua senha"
            {...register("confirm")}
            error={errors.confirm}
         />

         <Select {...register("job")} error={errors.job}>
            <option value="">Selecione uma profissão</option>
            <option value="UI / UX Designer">UI / UX Designer</option>
            <option value="Desenvolvedor Front-end">Desenvolvedor Front-end</option>
            <option value="Desenvolvedor Back-end">Desenvolvedor Back-end</option>
            <option value="Tech Lead">Tech Lead</option>
         </Select>

         <button type="submit" disabled={isErrors}>Cadastrar</button>
      </form>
   );
};
