import Image from "next/image";
import Homepage from "./components/homepage/homepage";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-4 sm:p-16 tracking-widest overflow-auto font-[family-name:livvic] overflow-auto">
      <div>
        <Homepage/>
      </div>
    </div>
  );
}
