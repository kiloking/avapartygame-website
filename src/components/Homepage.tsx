import { database, ref, onValue } from "../firebase";
import { useEffect, useState } from "react";

function Homepage() {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const amountRef = ref(database, "totalAmount");
    onValue(amountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setTotalAmount(data);
    });
  }, []);

  return (
    <div className="w-[980px] h-screen bg-blue-300 mx-auto">
      <h2>獎金分配</h2>
      <div>總金額: {totalAmount}</div>
      <div>最大獎: {totalAmount * 0.5}</div>
      <div>第二獎: {totalAmount * 0.2}</div>
      <div>第三獎: {totalAmount * 0.1}</div>
      <div>參加獎: {totalAmount * 0.05}</div>
      <div>參加獎: {totalAmount * 0.05}</div>
      <div>參加獎: {totalAmount * 0.05}</div>
      <div>參加獎: {totalAmount * 0.05}</div>
    </div>
  );
}

export default Homepage;
