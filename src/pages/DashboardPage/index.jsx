import { useContext, useState } from "react";
import { CreateNewsForm } from "../../components/CreateNewsForm";
import { DeletingBox } from "../../components/DeletingBox";
import { NewsContext } from "../../providers/NewsContext";
import { UserContext } from "../../providers/UserContext";

export const DashboardPage = () => {
   const [isCreateOpen, setIsCreateOpen] = useState(false);
   const { user, userLogout } = useContext(UserContext);
   const { newsList, deleteNews } = useContext(NewsContext);
   const [isDeleting, setIsDeleting] = useState(null);

   return (
      <main>
         <header>
            <button onClick={() => userLogout()}>Sair</button>
            <h1>
               {user?.name} - {user?.job}
            </h1>
            <p>{user?.email}</p>
         </header>
         <button onClick={() => setIsCreateOpen(!isCreateOpen)}>
            {isCreateOpen ? "Fechar" : "Criar Notícia"}
         </button>
         {isCreateOpen ? <CreateNewsForm /> : null}
         {isDeleting ? (
            <DeletingBox
               trueCallback={async () => {
                  await deleteNews(isDeleting.id);
                  setIsDeleting(null);
               }}
               falseCallback={() => setIsDeleting(null)}
            >
               <p>Tem certeza que deseja excluir essa notícia</p>
            </DeletingBox>
         ) : null}

         <ul>
            {newsList.map((currentNew) => (
               <li key={currentNew.id}>
                  <h3>
                     {currentNew.title} - {currentNew.category}
                  </h3>
                  <p>{currentNew.content}</p>
                  <span>{currentNew.author}</span>
                  {/* <button onClick={() => deleteNews(currentNew.id)}>Excluir</button> */}
                  <button onClick={() => setIsDeleting(currentNew)}>Excluir</button>
               </li>
            ))}
         </ul>
      </main>
   );
};
