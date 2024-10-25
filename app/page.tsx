"use client";

import HomePage from "./components/HomePage/HomePage";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/ticTacToe">Play Tic Tac Toe</Link>
      <HomePage />
    </>
  );
}
