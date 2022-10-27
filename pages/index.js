import Head from 'next/head'
// import Image from 'next/image'
// import { Table } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'

export default function Home({loc_list}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>ここボード</title>
        <meta name="description" content="manage the location of team members" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>一覧</h2>
        <table className='table'>
          <thead>
          <tr>
            <th>所属局</th>
            <th>氏名</th>
            <th>現在地</th>
          </tr>
          </thead>
          <tbody>
          {loc_list.map((loc) => {
            return <tr key={loc["タイムスタンプ"]}>
              <td>{`${loc["所属局"]}`}</td>
              <td>{`${loc["氏名"]}`}</td>
              <td>{`${loc["教室"]}`}</td></tr>;
          })}
          </tbody>
        </table>
      </main>
    </div>
  )
}
export async function getServerSideProps() {
  const key = process.env.KEY;
  const lib = process.env.LIB;
  const res = await fetch(`https://script.googleusercontent.com/macros/echo?user_content_key=${KEY}&lib=${LIB}`);
  const loc_list = await res.json();
  console.log(loc_list);
  return { props: { loc_list } };
}