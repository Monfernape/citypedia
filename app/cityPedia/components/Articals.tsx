import { Button } from "@/components/ui/button";
import Image from "next/image"

export default function Articals() {
 
  return (
    <div className="flex flex-row ">
      <Image
          src="/profileImage.jpg"
          alt="Picture of the author"
          width={120}
          height={120}
        />
      <div className="flex-2 pl-3 ">
      <h2 className="text-lg font-semibold">Now Launch Newton Task</h2>
      <div className="flex flex-row gap-8 text-base font-medium my-2">
      <p>Press Release</p>
      <p>Aprail 18,2024</p>
      </div>
        <p className="text-xs text-gray-400 my-4">Newton is a task management system that is designed to help you get things done. It is a simple, yet powerful tool that can help you organize your tasks and keep track of your progress.</p>
        <Button variant="outline" className="rounded-full">Read More</Button>
      </div>
    </div>
  );
}