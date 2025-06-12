import React, { useEffect, useState } from 'react';
import IndexLayout from '../components/IndexLayout/IndexLayout';
import IndexMain from '../components/IndexMain/IndexMain';

function Index(props) {
    const [todoList, setTodoList] = useState([]);
    const [filter, setFilter] = useState("incomplete");
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const localStorageTodoList = localStorage.getItem("todoList");
        if (!localStorageTodoList) {
            localStorage.setItem("todoList", JSON.stringify([]));
            localStorageTodoList = [];
            setTodoList(localStorageTodoList);
        } else {
            setTodoList(JSON.parse(localStorageTodoList))
        }
    })

    console.log(localStorage.getItem("name"))
    console.log(localStorage.setItem("name","제다이"))
    console.log(localStorage.getItem("name"))

    useEffect(() => {
        console.log(todoList);
        // setFilter("incomplete");
        setSearchText("");
    }, [todoList]);

    const filterTodoList = todoList.filter(todo => {
        if (filter === "all") {
            return true;
        } else if (filter === "complete") {
            return todo.isComplete;
        } else if (filter === "incomplete") {
            return !todo.isComplete;
        }
    }).filter(todo => {
        if (searchText.trim().length === 0) {
            return true;
        } 
        return todo.content.includes(searchText);
    });

    return (
        <IndexLayout filter={filter} setFilter={setFilter} setSearchText={setSearchText}>
            <IndexMain todoList={filterTodoList} setTodoList={setTodoList} />
        </IndexLayout>
    );
}

export default Index;