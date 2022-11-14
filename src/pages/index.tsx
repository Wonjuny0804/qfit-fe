import React, { useEffect, useState, useRef } from "react";
import Layout from "src/components/common/Layout";
import SearchIcon from "../public/icons/search-outline.svg";

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
  const [showAddressModal, setShowAddressModal] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  const $input = inputRef.current;
  const $layer = layerRef.current;

  const handleInputClick = () => {
    console.log(loaded, $input, $layer);
    if (!loaded || !$input || !$layer) return;
    new daum.Postcode({
      oncomplete: (data) => {
        let add = "";
        let extraAddr = "";

        if (data.userSelectedType === "R") {
          add = data.roadAddress;
        } else {
          add = data.jibunAddress;
        }

        if (data.userSelectedType === "R") {
          // 법정동명이 있을 경우 추가한다. (법정리는 제외)
          // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }
          // 건물명이 있고, 공동주택일 경우 추가한다.
          if (data.buildingName !== "" && data.apartment === "Y") {
            extraAddr +=
              extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
          }
          // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
          if (extraAddr !== "") {
            extraAddr = " (" + extraAddr + ")";
          }

          if (inputRef.current) inputRef.current.value = extraAddr;
        }

        $layer.style.display = "none";
      },
      width: "100%",
      height: "100%",
      maxSuggestItems: 5,
    }).embed($layer);

    setShowAddressModal(true);
    initLayerPosition();
  };

  const initLayerPosition = () => {
    if (!$layer) return;

    const width = 320; //우편번호서비스가 들어갈 element의 width
    const height = 450; //우편번호서비스가 들어갈 element의 height
    const borderWidth = 2; //샘플에서 사용하는 border의 두께

    // 위에서 선언한 값들을 실제 element에 넣는다.
    $layer.style.width = width + "px";
    $layer.style.height = height + "px";
    $layer.style.border = borderWidth + "px solid";

    $layer.style.left =
      ((window.innerWidth || document.documentElement.clientWidth) - width) /
        2 -
      borderWidth +
      "px";
    $layer.style.top =
      ((window.innerHeight || document.documentElement.clientHeight) - height) /
        2 -
      borderWidth +
      "px";
  };

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
  }, []);

  return (
    <Layout showNav withDefaultPadding>
      <h1 className={`font-bold text-2xl mt-10 leading-[150%]`}>
        다니고 있는 헬스장의 <br /> 리뷰를 찾아보세요
      </h1>

      <div
        className={`border border-[#EEEEEE] rounded-[8px] mt-8 px-4 py-4 flex justify-between`}
      >
        <input
          type={"text"}
          placeholder={"동(읍, 면)으로 검색 (ex. 성수동)"}
          className={`bg-transparent w-full outline-none`}
          onClick={handleInputClick}
          ref={inputRef}
        />
        <SearchIcon width={24} height={24} className={`flex-shrink-0`} />
      </div>

      <div
        id="layer"
        className={`fixed overflow-hidden z-[1] `}
        ref={layerRef}
      ></div>
    </Layout>
  );
};

export default Home;
