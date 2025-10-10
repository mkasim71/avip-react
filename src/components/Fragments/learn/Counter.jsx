import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect dipanggil setiap kali 'count' berubah
  useEffect(() => {
    console.log(`Nilai count sekarang : ${count}`);
    document.title = `Count: ${count}`; //ubah judul tab browser

    return () => {
      console.log("Membersihkan sebelum update count berikutnya");
    };
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <button onClick={() => setCount(count - 1)}>Kurang</button>
    </div>
  );
}

export default Counter;
