import Image from "next/image";

export default function Homepage() {
  return (
    <div className="text-xl md:text-5xl p-4 mt-16">
    <Image src="/images/tcd_logo.png" alt="" width={150} height={150}/>
       <div className="text-xl md:text-5xl p-4 m-16">
       <h1> Find any Corporate Term!</h1>
       </div>
  </div>

  );
}