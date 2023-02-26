import type { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    sessionStorage.setItem("bridgeId", "bridgeId1234");
    sessionStorage.setItem("token", "token1234");
  }, []);
  return (
    <div>
      <Link href={"/post"}>記事一覧</Link>
    </div>
  );
};

export default Home;
