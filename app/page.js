"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "./dashboard/_components/Header";

export default function Home() {
  const router = useRouter();
  const onPress = () => {
    router.push("/dashboard");
  };
  return (
    <div>
      <Header/>
      <h1 className="mb-4 my-36 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center ">Your Personal AI Interview Coach</h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">Double your chances of landing that job offer with our AI-powered interview prep</p>
      <div className="flex justify-center items-center">
      <Button className="text-center hover:scale-105 hover:shadow-lg" onClick={onPress}>Get Started</Button>
      </div>

    </div>
  );
}
