import React, { useEffect, useState } from "react";
import IndexLayout from "../components/IndexLayout/IndexLayout";
import IndexMain from "../components/IndexMain/IndexMain";

function Index(props) {
  const [isLoad, setLoad] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    let localStorageTodoList = localStorage.getItem("todoList");
    if (!localStorageTodoList) {
      localStorage.setItem("todoList", JSON.stringify([]));
      /* 
      Uncaught SyntaxError: Unexpected token 'u', "function st"... is not valid JSON at JSON.parse
      JSON.parse()가 제대로 된 JSON이 아닌 문자열을 파싱하려고 할 때 발생
      localStorage.getItem("todoList");을 콘솔에 치면
      아마도 undefined, function..., 또는 JSON이 아닌 문자열이 나올거
      => localStorage.removeItem("todoList"); //잘못된 localStorage 데이터 삭제
      */
      localStorageTodoList = [];
      setTodoList(localStorageTodoList);
    } else {
      setTodoList(JSON.parse(localStorageTodoList));
    }
    setLoad(true);
  }, []);

  useEffect(() => {
    setSearchText("");
    if (isLoad) {
      let localStorageTodoList = localStorage.getItem("todoList");
      const todoListJson = JSON.stringify(todoList);
      if (localStorageTodoList !== todoListJson) {
        localStorage.setItem("todoList", todoListJson);
      }
    }
  }, [isLoad, todoList]);

  const filterTodoList = todoList
    .filter((todo) => {
      if (filter === "all") {
        return true;
      } else if (filter === "complete") {
        return todo.isComplete;
      } else if (filter === "incomplete") {
        return !todo.isComplete;
      }
    })
    .filter((todo) => {
      if (searchText.trim().length === 0) {
        return true;
      }
      return todo.content.includes(searchText);
    });

  return (
    <IndexLayout
      filter={filter}
      setFilter={setFilter}
      setSearchText={setSearchText}
    >
      <IndexMain todoList={filterTodoList} setTodoList={setTodoList} />
    </IndexLayout>
  );
}

export default Index;
