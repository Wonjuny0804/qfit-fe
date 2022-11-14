import React, { useEffect, useState } from "react";
import Layout from "src/components/common/Layout";
import useDaumAddress from "src/hooks/useDaumAddress";
import SearchIcon from "../public/icons/search.svg";

class Postcode {
  constructor(callbacks: { oncomplete: (data: unknown) => void }) {}
}

declare const global: {
  daum: {
    Postcode: Postcode;
  };
};

const Home = () => {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const scripts = document.querySelector(
      `script[src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"]`
    );
    if (scripts) return;

    const $script = document.createElement("script");
    $script.src =
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    $script.defer = true;
    $script.onload = () => setLoaded(true);

    document.body.appendChild($script);

    if (loaded) {
      new daum.Postcode({
        onclose: (data) => console.log(data),
      }).open();
    }
  }, []);

  return (
    <Layout showNav withDefaultPadding>
      <h1 className={`font-bold text-2xl mt-10 leading-[150%]`}>
        다니고 있는 헬스장의 <br /> 리뷰를 찾아보세요
      </h1>

      <div className={`border border-[#EEEEEE]`}>
        <input
          type={"text"}
          placeholder={"동(읍, 면)으로 검색 (ex. 성수동)"}
          className={`bg-transparent`}
          onClick={() => new daum.Postcode({}).open()}
        />
        <SearchIcon width={24} height={24} />
      </div>
    </Layout>
  );
};

export default Home;
