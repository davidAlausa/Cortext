import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={`flex min-h-screen flex-col items-center justify-center px-4 ${styles.gradientBackground}`}>
        <div className="text-center max-w-2xl">
          {/* Title */}
          <h1 className="text-6xl text-white mb-4 tracking-[1em]">
            cortext
          </h1>
          
          {/* Description */}
          <small className="text-blue-400 text-lg block mb-8 tracking-[0.5em]">
            minding your business
          </small>
          
          {/* Buttons */}
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-2 text-white border border-white rounded-full hover:bg-white hover:text-black shadow-lg hover:shadow-gray-600/50 transition ">
              Login
            </button>
            <button className="px-6 py-2 text-white bg-blue-400 rounded-full hover:bg-blue-700 shadow-lg hover:shadow-blue-600/50 transition">
              Request a Demo
            </button>
          </div>
        </div>
      </div>    
    </>
  );
}
