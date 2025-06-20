import React, { useEffect, useState } from "react";
import RootLayout from "../RootLayout/RootLayout"; // 전체 레이아웃 껍데기
import { Route, Routes } from "react-router-dom"; // 페이지 전환용
import Home from "../Home/Home"; // 메인 홈
import UnAuthRouter from "./UnAuthRouter"; // 로그인 안 한 유저용 라우트
import AuthRouter from "./AuthRouter"; // 로그인 한 유저용 라우트
import NotFound from "../NotFound/NotFound"; // 404 페이지
import RootHeader from "../RootHeader/RootHeader"; // 헤더 (로고, 로그인/로그아웃 버튼)
import axios from "axios"; // API 호출
import { useQuery } from "@tanstack/react-query"; // React Query - 서버에서 데이터 가져올 때 사용

function MainRouterReactQuery(props) {
  const principalUserQuery = useQuery({
    queryKey: ["principalUserQuery"], // 이 쿼리의 이름 (중복 안 되게)
    queryFn: async () => {
      const accessToken = localStorage.getItem("AccessToken"); // 로컬스토리지에 저장된 토큰 가져옴
      return await axios.get("http://localhost:8080/api/users/principal", {
        headers: {
          Authorization: !accessToken ? null : `Bearer ${accessToken}`,
        },
      });
    },
    // staleTime: 1000 * 60, // 데이터는 3초 동안 신선하다고 판단
    // refetchOnWindowFocus: true, // 창 다시 클릭하면 자동으로 데이터 새로 가져옴
    // retry: 3, // 실패하면 최대 3번 다시 시도
    // gcTime: 6000 * 10, // 10분 지나면 캐시된 데이터 삭제
    // enabled: false,
  });


  console.log(principalUserQuery.isLoading);
  console.log(principalUserQuery.data);

  return (
    <>
      {!principalUserQuery.isLoading && (
        <RootLayout>
          <RootHeader />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/auth/*" element={<AuthRouter />} />
            <Route path="/users/*" element={<UnAuthRouter />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RootLayout>
      )}
    </>
  );
}

export default MainRouterReactQuery;
