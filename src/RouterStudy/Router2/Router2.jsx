/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from "react-router-dom";
import React from "react";

/*
하위라우트(서브라우트)
*/
function Page1() {
  return (
    <>
      <div>
        <h1>Page1</h1>
        <Routes>
          <Route path="/page1" element={<h1>페이지1입니다.</h1>} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </>
  );
}

function Page2() {
  return (
    <>
      <div>
        <h1>Page2</h1>
      </div>
    </>
  );
}

function Router2(props) {
  return (
    <div>
      <header>
        <Link to={"/pagestudy/page1"}>page1</Link>
        <Link to={"/pagestudy/page2"}>page2</Link>
        <Link to={"/pagestudy/name1"}>name1</Link>
        <Link to={"/pagestudy/name2"}>name2</Link>
      </header>
      <h1>Router2</h1>
      <Routes>
        <Route path="/pagestudy/*" element={<Page1 />} />
        <Route path="/pagestudy2/*" element={<></>} />
        <Route path="/name1" element={<h1>제다정</h1>} />
        <Route path="/name2" element={<h1>제다이</h1>} />
      </Routes>
    </div>
  );
}

export default Router2;
