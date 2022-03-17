import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import HomePage from "../components/Hero";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <HomePage />
        <BlogCard />
        <About />
        <Footer />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
