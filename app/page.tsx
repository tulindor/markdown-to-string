"use client";
import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

const MarkdownEditor = dynamic(() => import("./components/MarkdownEditor"), {
  ssr: false,
  loading: () => <div>Loading editor...</div>,
});

export default function Home() {
const [text, setText] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div>
          <p className={styles.title}>Ingresá el testamento</p>
          {isClient && <MarkdownEditor value={text} onChange={setText} />}
        </div>
        <p className={styles.title}>String para VTEX 💪</p>
        <div className={styles.textBox}>{JSON.stringify(text)}</div>
      </main>
    </div>
  );
}
