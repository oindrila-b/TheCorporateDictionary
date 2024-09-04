import Image from "next/image";
import NavigationBar from "./components/navigation/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 bg-gradient-to-r from-slate-900 to-slate-700">
     <NavigationBar/>
     
    </main>
  );
}
