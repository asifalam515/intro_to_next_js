import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="text-center">
      <Header></Header>
      <h1 className="text-center text-3xl p-2 m-2">
        Lets get Started with next js
      </h1>
      <p>
        Know About us <Link href="/about">Here</Link>{" "}
      </p>
      <p>
        Here is the <Link href="footer">Footer</Link>{" "}
      </p>
    </div>
  );
}
