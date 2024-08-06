import Image from "next/image";
import taroCards from '../public/taroCards.png'
interface Props {
  name: string;
}
const Button = ({ name }: Props) => {
  return <button className="bg-blue-500 border-sky-400 border-4 rounded-xl w-100 text-white py-1 px-8 font-bold">{ name }</button>;
};

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-24 text-2xl font-sans opacity-80">
      <Image width={200} height={120} alt="taro cards image" src={taroCards}/>
      <h1 className="text-blue-500 font-bold text-center drop-shadow-xl leading-6">Гадание таро<br/> - <br/> расклады на картах онлайн</h1>
      <div className="flex flex-col gap-1.5">
         <Button name="Карта дня"/>
         <Button name="Да или нет"/>
         <Button name="Отношения"/>
      </div>
    </main>
  );
}
