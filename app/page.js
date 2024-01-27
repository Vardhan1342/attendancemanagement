import { auth } from "@/auth";
import Header from "@/components/Header";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home () {

const sessions=await auth();
if(!sessions){
  redirect("/login")
}

  return (
    <main className="">
        <Header />
           
    </main>
  );
}
