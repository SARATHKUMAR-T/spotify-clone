"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();
  const onClick = () => {
    // add auth before push
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className="relative group flex items-center rounded-md 
    hover:bg-neutral-100/20 transition px-4 overflow-hidden gap-x-4 bg-neutral-100/10 "
    >
      <div className="relative min-h-[32px] min-w-[32px] ">
        <Image className="object-contain" fill src={image} alt="liked" />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div
        className="absolute transition opacity-0 rounded-full items-center justify-center flex bg-green-500
      p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110
      "
      >
        <FaPlay className="text-black" />
      </div>
    </button>
  );
};

export default ListItem;
