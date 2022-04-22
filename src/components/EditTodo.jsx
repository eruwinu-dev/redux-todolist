import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { selectTodo, editTodo } from "../redux/todosSlice"

import styles from "./styles"

const EditTodo = ({ todo }) => {
	const [value, setValue] = useState(todo.name)

	const dispatch = useDispatch()

	const valueChangeHandler = (event) => {
		event.preventDefault()
		setValue(event.target.value)
	}

	const editTodoHandler = (event) => {
		event.preventDefault()
		if (!value.trim().length) {
			setValue("")
			return
		}
		dispatch(editTodo({ id: todo.id, name: value }))
		setValue("")
		dispatch(selectTodo({ id: null }))
	}

	const closeEditTodoHandler = () => {
		dispatch(selectTodo({ id: null }))
	}

	return (
		<div style={styles.editTodoForm}>
			<input
				style={styles.editTodoInput}
				type="text"
				value={value}
				onChange={valueChangeHandler}
				placeholder="Edit Todo"
			/>
			<div>
				<button type="button" onClick={editTodoHandler}>
					Save
				</button>
				<button type="button" onClick={closeEditTodoHandler}>
					Close
				</button>
			</div>
		</div>
	)
}

export default EditTodo

