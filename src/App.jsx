import { useState } from "react";
import "./App.css";

// Ürün Listesi
const products = [
  { id: 1, name: "Özel Jet", price: 5000000000 },
  { id: 2, name: "Yat", price: 1000000000 },
  { id: 3, name: "Lüks Saat", price: 15000000 },
  { id: 4, name: "Özel Ada", price: 25000000000 },
  { id: 5, name: "Futbol Takımı", price: 3000000000 },
];

// Para birimi
function formatMoney(num) {
  return num.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function App() {
  const [balance, setBalance] = useState(100_000_000_000);
  const [owned, setOwned] = useState({}); // { productId: count }

  // Satın alma fonksiyonu
  const buyProduct = (id) => {
    const product = products.find((p) => p.id === id);
    if (balance >= product.price) {
      setBalance((prev) => prev - product.price);
      setOwned((prev) => ({
        ...prev,
        [id]: (prev[id] || 0) + 1,
      }));
    }
  };
  // Satma Fonksiyonu
  const sellProduct = (id) => {
    if (owned[id] > 0) {
      const product = products.find((p) => p.id === id);
      setBalance((prev) => prev + product.price);
      setOwned((prev) => {
        const newOwned = { ...prev };
        newOwned[id] -= 1;
        if (newOwned[id] === 0) delete newOwned[id];
        return newOwned;
      });
    }
  };

  return (
    <div className="app-container">
      <h1>Bill Gates Harcama Oyunu</h1>
      <div className="balance">Bakiye: {formatMoney(balance)}</div>

      {products.map((product) => {
        const count = owned[product.id] || 0;
        return (
          <div key={product.id} className="product">
            <div className="product-info">
              <strong>{product.name}</strong> - {formatMoney(product.price)}
            </div>
            <div className="buttons">
              <button
                onClick={() => buyProduct(product.id)}
                disabled={balance < product.price}
              >
                Buy
              </button>
              <button
                onClick={() => sellProduct(product.id)}
                disabled={count === 0}
              >
                Sell
              </button>
            </div>
          </div>
        );
      })}

      <div className="purchased-list">
        <h3>Satın Alınan Ürünler</h3>
        {Object.keys(owned).length === 0 && (
          <p>Henüz hiçbir ürün satın alınmadı.</p>
        )}
        <ul>
          {Object.entries(owned).map(([id, count]) => {
            const product = products.find((p) => p.id === parseInt(id));
            return (
              <li key={id}>
                {product.name} - Adet: {count} - Toplam:{" "}
                {formatMoney(product.price * count)}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
