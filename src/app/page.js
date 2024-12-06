"use client";
import Link from "next/link";
import Header from "./components/header";
import { useState } from "react";
import Counter from "@/components/Counter/Counter";

export default function Home() {
  return (
    <div className="text-center">
      <Header></Header>
      <h1 className="text-center text-3xl p-2 m-2">
        Lets get Started with next js.Counter
      </h1>
      <p>
        Know About us <Link href="/about">Here</Link>{" "}
      </p>
      <p>
        Here is the <Link href="footer">Footer</Link>{" "}
      </p>
      <h1 class="text-3xl"> </h1>
      <Counter></Counter>
    </div>
  );
}
