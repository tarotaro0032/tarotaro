import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <button className="bg-blue-500 border-sky-500 border-4 rounded-md w-100 text-white py-1 px-8 font-bold">Карта дня</button>
      </div>
    </main>
  );
}
