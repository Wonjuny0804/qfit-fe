import { useState, useEffect } from "react";

class DaumPostCodeService {
  constructor() {}

  static Postcode(param: { oncomplete: (data: unknown) => void }) {}
}

declare const global: {
  daum: DaumPostCodeService | undefined;
};

const useDaumAddress = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!global.daum) {
      const $script = document.createElement("script");
      $script.src =
        "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
      $script.defer = true;
      $script.onload = () => setLoaded(true);

      document.body.appendChild($script);
    }
  }, []);

  return { loaded, daum: global.daum };
};

export default useDaumAddress;
