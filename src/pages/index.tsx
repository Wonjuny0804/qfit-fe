import React from "react";
import Layout from "src/components/common/Layout";

const Home = () => {
  return (
    <Layout showNav withDefaultPadding>
      <h1 className={`font-bold text-2xl mt-10 leading-[150%]`}>
        다니고 있는 헬스장의 <br /> 리뷰를 찾아보세요
      </h1>
    </Layout>
  );
};

export default Home;
