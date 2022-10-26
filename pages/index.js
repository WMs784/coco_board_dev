import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({loc_list}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>ここボード</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          白山祭実行委員会　居場所一覧
        </h1> */}
        <h2>一覧</h2>
        <table>
          {loc_list.map((loc) => {
            return <tr key={loc["タイムスタンプ"]}>
              <td>{`所属局：${loc["所属局"]}`}</td>
              <td>{`氏名：${loc["氏名"]}`}</td>
              <td>{`現在地：${loc["教室"]}`}</td></tr>;
          })}
        </table>
      </main>
    </div>
  )
}
export async function getServerSideProps() {
  // const key = process.env.KEY;
  // const lib = process.env.LIB;
  const res = await fetch(`https://script.googleusercontent.com/macros/echo?user_content_key=ZqjNYMH9142AyV2_gL987RlLNFUIexV1nN-oE1vCYSZwEFLvuGLLT5vNxuwxWQleCVXHFi4Q6rs84mtUtz52B3BiC2PcrrfOm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKNK-I2lBb-ctL5yfHeH9OSPIxbXM_Wp_79N0pRnStu2_0VELsqxM3F9yCC5jelkVTIK384uT52L1y5mWegSO4PhQ8aGS_S5s9z9Jw9Md8uu&lib=MZ60lBXUZUSjyzLO4JXZdOg3P25e9I3Qg`);
  const loc_list = await res.json();
  console.log(loc_list);
  return { props: { loc_list } };
}