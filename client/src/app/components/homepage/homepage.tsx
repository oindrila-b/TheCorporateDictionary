import Image from "next/image";

export default function Homepage() {
  return (
    <div className="">
    <Image src="/images/tcd_logo.png" alt="" width={150} height={150}/>
    <p> This is the homepage</p>
  </div>

  );
}