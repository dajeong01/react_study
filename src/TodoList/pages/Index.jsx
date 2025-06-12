import React, { useEffect, useState } from 'react';
import IndexLayout from '../components/IndexLayout/IndexLayout';
import IndexMain from '../components/IndexMain/IndexMain';

function Index(props) {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        console.log(todoList);
    }, [todoList]);

    return (
        <IndexLayout>
            <IndexMain todoList={todoList} setTodoList={setTodoList} />
        </IndexLayout>
    );
}

export default Index;