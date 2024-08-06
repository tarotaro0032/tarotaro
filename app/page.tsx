"use client";
import Image from "next/image";
import taroCards from '../public/taroCards.png';
import taroMan from '../public/taroMan.png';
import arrowUp from '../public/arrowUp.png';
import { useState } from "react";
interface Props {
  name: string;
  setEnablePage: Function;
}

const ButtonClick = ({ name, setEnablePage }: Props) =>
  <button 
    className="bg-blue-500 border-sky-400 border-4 rounded-xl w-100 text-white py-1 px-8 font-bold"
    onClick={() => setEnablePage(false)}
  >
      { name }
  </button>;

const ButtonReturn = ({setEnablePage} : {setEnablePage: Function}) => 
  <button 
    className="bg-blue-500 border-sky-400 border-4 rounded-xl w-100 text-white py-1 px-2 font-bold"
    onClick={() => setEnablePage(true)}
  >
    <Image src={arrowUp} alt="hi" height={40} width={40} />
  </button>;

const FirstPage = ({setEnablePage}: {setEnablePage: Function}) => 
  (
  <>
    <div className="items-center flex flex-col">
      <Image width={200} height={120} alt="taro cards image" src={taroCards}/>
      <h1 className="text-blue-500 font-bold text-center drop-shadow-xl leading-6">Гадание таро<br/> - <br/> расклады на картах онлайн</h1>
    </div>
    <div className="flex flex-col gap-1.5">
      <ButtonClick name="Карта дня" setEnablePage={setEnablePage}/>
      <ButtonClick name="Да или нет" setEnablePage={setEnablePage}/>
      <ButtonClick name="Отношения" setEnablePage={setEnablePage}/>
    </div>
  </>
)

const SecondPage = ({setEnablePage}: {setEnablePage: Function}) => (
  <>
    <div className=" items-center flex flex-col gap-3">
      <Image width={100} height={50} alt="taro man" src={taroMan} />
      <h1 className="text-blue-500 font-bold text-center drop-shadow-xl leading-6">Шестерка пентаклей</h1>
      <p className="text-sm text-blue-500 text-center">Смело помогайте другим людям, проявляйте заботу и активность, чтобы радоваться жизни и постараться делать доброе дело.
        Не отказывайте никому в помощи, вполне вероятно, что даже добрый совет или маленький недорогой подарок поднимут вам настроение и заставят почуствовать себя значимее, нужнее другим.
      </p>
    </div>
    <ButtonReturn setEnablePage={setEnablePage}/>
  </>
)

export default function Home() {

  const [enablePage, setEnablePage] = useState(true);
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-24 text-2xl font-sans opacity-80">
        { enablePage ? <FirstPage setEnablePage={setEnablePage}/> : <SecondPage setEnablePage={setEnablePage}/> }
    </main>
  );
}
