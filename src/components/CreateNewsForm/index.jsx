import { useContext } from "react";
import { useForm } from "react-hook-form";
import { NewsContext } from "../../providers/NewsContext";
import { Input } from "../Input";

export const CreateNewsForm = () => {
   const { register, handleSubmit } = useForm();

   const { createNews } = useContext(NewsContext);

   /*
    { 
   "category": "economia",
   "title": "Imposto de Renda 2023: como declarar planos de previdência PGBL e VGBL.",
   "content": "Contribuições feitas para o PGBL são dedutíveis da base de cálculo do IR 2023 em até 12% da renda bruta tributável anual. Já o VGBL não permite o desconto.",
   "author": "Isabela Bolzani"
}
*/
   const submit = (formData) => {
        createNews(formData);
   };

   return (
      <form onSubmit={handleSubmit(submit)}>
         <Input placeholder="Categoria" {...register("category")} />
         <Input placeholder="Título" {...register("title")} />
         <Input placeholder="Conteúdo" {...register("content")} />
         <button type="submit">Criar a notícia</button>
      </form>
   );
};
