import full from "../assets/harry_full.jpg";
import crop from "../assets/harry_crop.png";
import harry from "../assets/harry_name.svg";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div ref={ref} className="min-w-full min-h-screen overflow-hidden relative">
      <div className="relative flex items-center justify-center z-10">
        <motion.div
          className="w-[36%] relative z-10 inset-0 top-[2rem] left-[35rem]"
          style={{ y: textY }}
        >
          <img src={harry} alt="name" className="w-full bg-cover bg-center" />
        </motion.div>
      </div>
      <motion.div
        className="min-w-full min-h-screen absolute z-0 inset-0"
        style={{
          backgroundImage: `url(${full})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      ></motion.div>
      <div
        className="min-w-full min-h-screen absolute z-20 inset-0"
        style={{
          backgroundImage: `url(${crop})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default Home;
