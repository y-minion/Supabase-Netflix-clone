"use client"; // 에러 컴포넌트는 반드시 클라이언트 컴포넌트여야 합니다.

import { useEffect } from "react";

// error.js는 error와 reset 두 가지 props를 받습니다.
export default function Error({ error, reset }) {
  useEffect(() => {
    // 에러 리포팅 서비스(Sentry 등)에 에러를 로깅할 수 있습니다.
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Ouch! 🤕 문제가 발생했습니다.</h2>
      <p>{error.message || "영화를 불러오는 데 실패했습니다."}</p>
      <button
        onClick={
          // reset() 함수를 호출하면 page.js를 다시 렌더링하려고 시도합니다.
          () => reset()
        }
      >
        다시 시도
      </button>
    </div>
  );
}
