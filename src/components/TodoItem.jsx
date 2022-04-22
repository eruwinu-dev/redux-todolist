import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, toggleTodo, selectTodo } from "../redux/todosSlice"
import EditTodo from "./EditTodo"

import styles from "./styles"

const TodoItem = ({ todo }) => {
	const selectedTodo = useSelector((state) => state.todos.selectedTodo)
	const dispatch = useDispatch()

	const toggleTodoHandler = () => {
		dispatch(toggleTodo({ id: todo.id }))
	}

	const selectTodoHandler = () => {
		dispatch(selectTodo({ id: todo.id }))
	}

	const deleteTodoHandler = () => {
		dispatch(deleteTodo({ id: todo.id }))
	}

	return (
		<>
			{todo.id === selectedTodo ? (
				<EditTodo todo={todo} />
			) : (
				<div style={styles.todoItem}>
					<div>
						<input type="checkbox" checked={todo.completed} onChange={toggleTodoHandler} />
						<span style={todo.completed ? styles.completed : {}}>{todo.name}</span>
					</div>
					<div>
						<button type="button" onClick={selectTodoHandler}>
							Edit
						</button>
						<button type="button" onClick={deleteTodoHandler}>
							Delete
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default TodoItem

