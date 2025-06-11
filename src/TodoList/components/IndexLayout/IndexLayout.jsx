/** @jsxImportSource @emotion/react */
import React from 'react';
import * as s from './styles.js';
import IndexHeader from '../IndexHeader/IndexHeader.jsx';

function IndexLayout({children}) {  // props는 무조건 중괄호 치기
    return (
        <div css={s.layout}>
            <IndexHeader />
            {children}
        </div>
    );
}

export default IndexLayout;