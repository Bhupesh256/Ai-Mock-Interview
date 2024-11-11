"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Header from "./dashboard/_components/Header";
import { Contrast } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const onPress = () => {
    router.push("/dashboard");
  };
  return (
    <div style={{
      backgroundImage: `url('AI_mock.jpg')`, // Replace with your image path
      
      backgroundSize: "cover", // Makes the image cover the entire background
      backgroundPosition: "center", // Centers the background image
      backgroundRepeat: "no-repeat", // Ensures the image doesn't repeat
      height: "100vh", 
    }}>
      <Header/>
      <h1 className="mb-4 my-36 text-4xl font-extrabold tracking-tight leading-none text-black-900 md:text-5xl lg:text-6xl dark:text-white text-center ">Your Personal AI Interview Coach</h1>
      <p className="mb-8 text-lg font-normal text-black-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">Double your chances of landing that job offer with our AI-powered interview prep</p>
      <div className="flex justify-center items-center">
      <Button className="text-center hover:scale-105 hover:shadow-lg" onClick={onPress}>Get Started</Button>
      </div>

    </div>
  );
}
