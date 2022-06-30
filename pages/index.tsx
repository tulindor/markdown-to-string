import type { NextPage } from "next";
import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import "easymde/dist/easymde.min.css";

const Home: NextPage = () => {
  const [text, setText] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Markdown a String!</title>
        <meta name="description" content="App generada para convertir markdown a string" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p className={styles.title}>Ingresá el testamento</p>
        <SimpleMDE value={text} onChange={setText} />
      </div>
      <p className={styles.title}>String para VTEX 💪</p>
      <div className={styles.textBox}>{JSON.stringify(text)}</div>
    </div>
  );
};

export default Home;
