// import Head from "next/head";
import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Home</title>
      </Head>

      <h1 className={styles.title}>Hola. Bienvenido a Home!!</h1>
    </MainLayout>
  );
}
