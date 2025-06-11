/*
Emotion ( Css in JS 라이브러리 )
1. npm install @emiotion/react : 라이브설치
2. jsx태그의 css 속성 활성화  -> jsxImportSource @react/emotion
3. CSS 객체 import -> css`` 문자열로 css 작성
4. 확장프로그램으로 vscode-stuyled-components 설치
*/

/** @jsxImportSource @emotion/react */
import * as s from './styles.js';
import React from 'react';


function Emotion2(props) {
    return (
        <div>
            <div css={s.box1}></div>
            <div css={s.box2("gray")}></div>
        </div>
    );
}

export default Emotion2;