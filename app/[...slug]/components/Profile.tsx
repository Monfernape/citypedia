import { Button } from "@/components/ui/button";
import { Link2Icon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="p-5 border-b-2 rounded-md">
      <div className="flex items-center flex-col">
        <Image
          src="/profileImage.jpg"
          alt="Picture of the author"
          width={120}
          height={120}
          className="rounded-md"
        />
        <div>
          <span className="text-[8px]">Top rated Criminal Defence Lawyer</span>
        </div>
        <h1 className="text-xl font-bold text-blue-600/50  underline">Stephon SitKoff</h1>
        <p className="text-[14px] font-medium text-[#00000082] pb-2.5 flex flex-row items-center">SitKoff & Hanrahan , LLP <Link2Icon /> </p>
        <p className="w-full text-xl text-center font-extrabold border border-black rounded-full py-2">310-526-3097</p>
      </div>
      <p className="text-[15px] font-semibold text-[#00000092] my-2.5">Los Angeles , CA</p>
      <p className="text-[13px] font-medium text-[#000000] my-2.5">
        Dedicating and preserving your rights when charaged with misdemeaner and
        feloney Criminal offences
      </p>
      <div className="flex justify-between gap-2">
        <Button className="flex-1 rounded-full">Contact Me</Button>
        <Button className="flex-1 rounded-full">View Profile</Button>
      </div>
    </div>
  );
}
