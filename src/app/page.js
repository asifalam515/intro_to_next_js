"use client";
import Link from "next/link";
import Header from "./components/header";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="text-center">
      <Header></Header>
      <h1 className="text-center text-3xl p-2 m-2">
        Lets get Started with next js.Counter {counter}
      </h1>
      <p>
        Know About us <Link href="/about">Here</Link>{" "}
      </p>
      <p>
        Here is the <Link href="footer">Footer</Link>{" "}
      </p>
      <button
        className="btn btn-primary"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
      <button
        className="btn btn-warning"
        onClick={() => setCounter(counter - 1)}
      >
        Decrease
      </button>
    </div>
  );
}
