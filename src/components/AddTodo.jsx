import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/todosSlice"

import styles from "./styles"

const AddTodo = () => {
	const [value, setValue] = useState("")

	const dispatch = useDispatch()

	const valueChangeHandler = (event) => {
		event.preventDefault()
		setValue(event.target.value)
	}

	const addTodoHandler = (event) => {
		event.preventDefault()
		if (!value.trim().length) {
			setValue("")
			return
		}
		dispatch(addTodo({ name: value }))
		setValue("")
	}

	return (
		<div style={styles.addTodoForm}>
			<input
				style={styles.addTodoInput}
				type="text"
				value={value}
				onChange={valueChangeHandler}
				placeholder="Add Todo"
			/>
			<button type="button" onClick={addTodoHandler}>
				Add Todo
			</button>
		</div>
	)
}

export default AddTodo

