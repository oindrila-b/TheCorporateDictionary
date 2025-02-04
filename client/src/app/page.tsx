import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-4 sm:p-16 tracking-widest overflow-auto font-[family-name:livvic]">
      <div className="overflow-auto">
        <Image src="/images/tcd_logo.png" alt="" width={150} height={150}/>
      </div>

    </div>
  );
}
