import { database, ref, onValue } from "../firebase";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// 添加樣式
const styles = {
  container: {
    fontFamily: "Arcade, sans-serif",
  },
};

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
    <div
      style={styles.container}
      className="w-full h-screen bg-black/90 mx-auto overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `url("./images/repeatbg01.png")`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat-x",
        }}
        className="w-full h-[100%] bg-cover bg-center absolute top-0 left-0"
      ></div>
      <div className=" absolute top-0 left-0 w-full h-full ">
        <h2>獎金分配</h2>
        <div>總金額: {totalAmount.toLocaleString()}</div>
        <div>最大獎: {(totalAmount * 0.5).toLocaleString()}</div>
        <div>第二獎: {(totalAmount * 0.2).toLocaleString()}</div>
        <div>第三獎: {(totalAmount * 0.1).toLocaleString()}</div>
        <div>參加獎: {(totalAmount * 0.05).toLocaleString()}</div>
        <div>參加獎: {(totalAmount * 0.05).toLocaleString()}</div>
        <div>參加獎: {(totalAmount * 0.05).toLocaleString()}</div>
        <div>參加獎: {(totalAmount * 0.05).toLocaleString()}</div>
      </div>

      <div className="w-[43%] mx-auto h-full relative flex flex-col justify-end items-center ">
        <div className="w-full flex flex-col justify-start   h-[100%]">
          <div className="  w-[85%] mx-auto mt-[2%] relative">
            <img src="./images/img01.png" alt="" className="w-full" />
            <div className=" absolute text-[9vw] top-[4%] right-[2%] text-right text-black">
              {totalAmount.toLocaleString()}
            </div>

            <motion.div
              className=" absolute w-[7%] bottom-[20%] "
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img src="./images/coin01.png" alt="1" className="w-full" />
            </motion.div>
            <motion.div
              className=" absolute w-[7%] -bottom-[24%] left-[37%] "
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 4.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img src="./images/coin02.png" alt="1" className="w-full" />
            </motion.div>
          </div>
          <div className="  w-[94%] mx-auto mt-[2%] relative bg">
            <img src="./images/img02.png" alt="" className="w-full" />
            <div className=" absolute text-[5.8vw] top-[10%] right-[2%] text-right text-white/80 flex flex-col justify-between gap-2 leading-[6vw]">
              <div>{(totalAmount * 0.5).toLocaleString()}</div>
              <div>{(totalAmount * 0.2).toLocaleString()}</div>
              <div>{(totalAmount * 0.1).toLocaleString()}</div>
            </div>
            <div className=" absolute text-[2.7vw] bottom-[0%] right-[2%] text-right text-white/80 flex flex-col justify-between  leading-[3.8vw]">
              <div className="flex -ml-[44%] gap-[19%]  justify-start ">
                <div>{(totalAmount * 0.05).toLocaleString()}</div>
                <div>{(totalAmount * 0.05).toLocaleString()}</div>
              </div>
              <div className="flex -ml-[72%] gap-[15%] ustify-start">
                <div>{(totalAmount * 0.05).toLocaleString()}</div>
                <div>{(totalAmount * 0.05).toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] mx-auto flex flex-col justify-start relative h-[20%]">
          <div className=" absolute w-[110%] top-[20%] left-1/2 -translate-x-1/2">
            <img src="./images/cloud.png" alt="1" />
          </div>
          <div className=" absolute w-[76%] -top-[15%] left-1/2 -translate-x-1/2">
            <img src="./images/title01.png" alt="1" />
          </div>
        </div>

        {/* STAR */}
        <motion.div
          className="absolute w-[30%] top-[12%] -left-[22%]"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src="./images/left01.png" alt="1" className="w-full" />
        </motion.div>
        <motion.div
          className="absolute w-[25%] top-[42%] -left-[45%]"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <img src="./images/left02.png" alt="1" className="w-full" />
        </motion.div>
        <motion.div
          className="absolute w-[13%] top-[62%] -left-[10%]"
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <img src="./images/left03.png" alt="1" className="w-full" />
        </motion.div>
        <motion.div
          className="absolute w-[7%] top-[80%] left-[25%]"
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <img src="./images/left04.png" alt="1" className="w-full" />
        </motion.div>
        <motion.div
          className="absolute w-[30%] -top-[12%] -right-[30%]"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          }}
        >
          <img src="./images/right01.png" alt="1" className="w-full" />
        </motion.div>
        <motion.div
          className="absolute w-[12%] top-[25%] -right-[10%]"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
        >
          <img src="./images/right02.png" alt="1" className="w-full" />
        </motion.div>
        <motion.div
          className="absolute w-[28%] top-[38%] -right-[40%]"
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          <img src="./images/right03.png" alt="1" className="w-full" />
        </motion.div>
        <motion.div
          className="absolute w-[32%] top-[70%] -right-[29%]"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        >
          <img src="./images/right04.png" alt="1" className="w-full" />
        </motion.div>
      </div>
    </div>
  );
}

export default Homepage;
