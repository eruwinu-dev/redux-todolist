import React from "react"
import { useSelector } from "react-redux"

import styles from "./styles"
import TodoItem from "./TodoItem"

const TodoList = () => {
	const todos = useSelector((state) => state.todos.todos)
	return (
		<div style={styles.todoList}>
			{todos.length ? todos.map((todo, index) => <TodoItem key={index} todo={todo} />) : <h4>No todos.</h4>}
		</div>
	)
}

export default TodoList

