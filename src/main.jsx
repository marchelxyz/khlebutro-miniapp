import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

// Пример простого компонента
function App() {
  useEffect(() => {
    // Проверяем наличие Telegram WebApp API
    const tg = window.Telegram?.WebApp;

    if (tg) {
      tg.ready();      // сообщаем Telegram, что всё готово
      tg.expand();     // разворачиваем WebApp на весь экран
      tg.setBackgroundColor("#fff8f0"); // задаём цвет фона (опционально)
    }
  }, []);

  const handleClick = () => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.close(); // Закрыть WebApp по кнопке
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#fff8f0] text-brown-800 font-sans">
      <h1 className="text-2xl font-semibold mb-4">Доброе утро! 🥖</h1>
      <p className="mb-6">Ваш хлеб уже в пути.</p>
      <button
        className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded-xl transition"
        onClick={handleClick}
      >
        Закрыть мини-приложение
      </button>
    </div>
  );
}

// Рендерим в DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
