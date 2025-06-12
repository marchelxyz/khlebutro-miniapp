import React, { useState } from "react";

const breadList = [
  { id: 1, name: "Багет", price: 80 },
  { id: 2, name: "Чиабатта", price: 90 },
  { id: 3, name: "Ржаной", price: 75 },
  { id: 4, name: "Булочки", price: 60 },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    window.Telegram.WebApp.HapticFeedback.notificationOccurred("success");
  };

  const handleCheckout = () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const summary = cart.map((item) => item.name).join(", ");

    window.Telegram.WebApp.sendData(
      JSON.stringify({ items: summary, total: `${total}₽` })
    );
    window.Telegram.WebApp.close();
  };

  return (
    <div className="min-h-screen bg-[#FFF8F1] text-[#4E342E] p-4">
      <h1 className="text-2xl font-bold text-center mb-2">ХлебУтро</h1>
      <p className="text-center mb-6">Доброе утро! Выберите свой хлеб 🥖</p>

      <div className="grid grid-cols-2 gap-4">
        {breadList.map((bread) => (
          <div
            key={bread.id}
            className="bg-white rounded-2xl shadow p-4 text-center"
          >
            <p className="text-lg font-medium">{bread.name}</p>
            <p className="text-sm text-[#7D5A50]">Испечено сегодня утром</p>
            <p className="font-semibold mt-2">{bread.price}₽</p>
            <button
              className="mt-2 bg-[#D2691E] hover:bg-[#a35014] text-white py-1 px-3 rounded"
              onClick={() => addToCart(bread)}
            >
              Добавить
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-4 left-0 w-full px-4">
          <button
            className="w-full bg-[#8B4513] text-white py-3 rounded-xl"
            onClick={handleCheckout}
          >
            Оформить заказ ({cart.reduce((s, i) => s + i.price, 0)}₽)
          </button>
        </div>
      )}
    </div>
  );
}