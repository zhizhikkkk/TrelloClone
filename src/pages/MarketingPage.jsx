import { Medal } from "lucide-react";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useLogin } from "../hooks/LoginProvider"; // Импортируем useLogin
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate

const MarketingPage = () => {
  const { user } = useLogin(); // Получаем состояние пользователя
  const navigate = useNavigate(); // Инициализируем useNavigate

  const handleGetTaskifyClick = () => {
    if (user) {
      navigate("/boards"); // Если залогинен, перенаправляем на BoardsPage
    } else {
      navigate("/login"); // Если не залогинен, перенаправляем на LoginPage
    }
  };

  return (
    <div className="font-trello h-screen w-screen bg-slate-100 flex items-center justify-center">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center p-4 mb-4 uppercase border rounded-full shadow-sm bg-amber-100 text-amber-700">
            <Medal className="w-6 h-6 mr-2" />
            No 1 task management
          </div>
          <h1 className=" mb-6 text-3xl text-center md:text-6xl text-neutral-800">
            Taskify helps team move
          </h1>
          <div className="p-2 px-4 pb-4 text-3xl text-center text-white rounded-md md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 w-fit">
            work forward.
          </div>
        </div>
        <div className="max-w-xs mx-auto mt-4 mb-6 text-sm text-center md:text-xl text-neutral-400 md:max-w-2xl">
          Collaborate, manage projects, and reach new productivity peaks. From
          high rises to the home office, the way your team works is unique -
          accomplish it all with Taskify.
        </div>
        {/* Изменяем кнопку для перенаправления */}
        <Button onClick={handleGetTaskifyClick}>Get Taskify for free</Button>
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
