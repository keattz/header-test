import styles from "./index.module.scss";

export default function Index(props) {
  return <div className={styles.code}>{JSON.stringify(props, null, 2)}</div>;
}

export async function getServerSideProps({ req, res }) {
  const { cookies, method, url } = req;
  const { cookie: _, ...headers } = req.headers; // Remove cookie from headers
  return {
    props: { cookies, headers, method, url },
  };
}
