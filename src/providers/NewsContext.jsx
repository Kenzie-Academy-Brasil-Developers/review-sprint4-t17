import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const NewsContext = createContext({});

//O provider é um componente, o provider é um componente, o provider componente
export const NewsProvider = ({ children }) => {
   const [loading, setLoading] = useState(false);
   const [newsList, setNewsList] = useState([]);

   const { user } = useContext(UserContext);

   //Lendo ou carregando as notícias da API
   useEffect(() => {
      const loadNewsData = async () => {
         try {
            setLoading(true);
            const { data } = await api.get("/news");
            setNewsList(data);
         } catch (error) {
            console.log(error);
         } finally {
            setLoading(false);
         }
      };
      loadNewsData();
   }, []);

   const createNews = async (formData) => {
      try {
         const token = localStorage.getItem("@TOKEN");

         const newData = { ...formData, author: user.name };
         //Atualiza o back-end (banco de dados neste caso)
         const { data } = await api.post("/news", newData, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         //Atualiza o front-end - MANIPULAÇÃO DE ESTADO
         setNewsList((newsList) => [...newsList, data]);
      } catch (error) {
         console.log(error);
      }
   };

   const deleteNews = async (currentNewId) => {
      try {
         const token = localStorage.getItem("@TOKEN");
         //Atualiza o back-end
         await api.delete(`/news/${currentNewId}`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         //Atualiza o meu front-end - MANIPULAÇÃO DE ESTADO
         setNewsList((newsList) => newsList.filter(currentNew => currentNew.id !== currentNewId));
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <NewsContext.Provider value={{ loading, newsList, createNews, deleteNews }}>
         {children}
      </NewsContext.Provider>
   );
};
