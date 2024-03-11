import { createDevice, getDevices } from "@/actions/Device";
import { auth } from "@/auth";
import Header from "@/components/Header";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home () {

const sessions=await auth();
if(!sessions){
  redirect("/login")
}
 getDevices();
  return (
    <main className="">
        <Header />
      <div>{JSON.stringify(sessions)}</div>
    </main>
  );
}
