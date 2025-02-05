import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return <h1 className="text-violet-50 text-5xl">Bem vindo! Você está logado.</h1>;
}
