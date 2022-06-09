import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <h1 className={styles.title}>Hola. Bienvenido a About!!</h1>
    </>
  );
}

About.getLayout = (page: JSX.Element) => <MainLayout>{page}</MainLayout>;
