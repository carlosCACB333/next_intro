import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import styles from "../styles/Home.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <h1 className={styles.title}>Hola. Bienvenido a Contact!!</h1>
    </>
  );
}

Contact.getLayout = (page: JSX.Element) => <MainLayout>{page}</MainLayout>;
