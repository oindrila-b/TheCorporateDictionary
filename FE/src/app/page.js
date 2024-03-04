import Link from "next/link";
import Navbar from "./navigation";
import Earth from "./components/page";
import Title from "./components/title";
import Background from "./components/background";


export default function Home() {
  return (
   <main className="flex flex-column min-h-screen justify-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black">
    <Navbar/>
    <Title/>
    <Background/>
    </main>
  );
}
