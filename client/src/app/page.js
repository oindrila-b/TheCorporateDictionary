import Image from "next/image";
import NavigationBar from "./components/navigation/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
     <NavigationBar/>
    </main>
  );
}
