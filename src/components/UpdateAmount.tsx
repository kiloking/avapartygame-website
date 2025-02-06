import { database, ref, set } from "../firebase";
import { useState } from "react";

function UpdateAmount() {
  const [amount, setAmount] = useState("");

  const handleSubmit = async () => {
    try {
      const amountRef = ref(database, "totalAmount");
      // 將字串轉換為數字
      await set(amountRef, Number(amount));
      setAmount(""); // 清空輸入框
      alert("更新成功！");
    } catch (error) {
      alert("更新失敗：" + error);
    }
  };

  return (
    <div>
      <h2>更新總金額</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="請輸入新的金額"
      />
      <button onClick={handleSubmit}>更新</button>
    </div>
  );
}

export default UpdateAmount;
