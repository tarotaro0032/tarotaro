import Image from "next/image";
interface Props {
  name: string;
}
const Button = ({ name }: Props) => {
  return <button className="bg-blue-500 border-sky-400 border-4 rounded-xl w-100 text-white py-1 px-8 font-bold">{ name }</button>;
};

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-24 text-2xl font-sans opacity-80">
      <img src="https://downloader.disk.yandex.ru/preview/c6153d6dcbe22d86e7e8c3203d64a9f991648bd8267025b1afaeac7556cfd9e5/66b299dd/ow36_I8qul9IN1FP8PZqMCslfoK4rtt-Vh7xyozsDI0h_Ya10424uurBud98LeQpDkdlZ4hzdThyr15lQ9IScw%3D%3D?uid=0&filename=hello.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048"/>
      <h1 className="text-blue-500 font-bold text-center drop-shadow-xl leading-6">Гадание таро<br/> - <br/> расклады на картах онлайн</h1>
      <div className="flex flex-col gap-1.5">
         <Button name="Карта дня"/>
         <Button name="Да или нет"/>
         <Button name="Отношения"/>
      </div>
    </main>
  );
}
