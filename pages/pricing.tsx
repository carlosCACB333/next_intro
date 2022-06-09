import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import styles from "../styles/Home.module.css";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing</title>
      </Head>
      <h1 className={styles.title}>Hola. Bienvenido a Pricing!!</h1>
    </>
  );
}

Pricing.getLayout = (page: JSX.Element) => <MainLayout>{page}</MainLayout>;
