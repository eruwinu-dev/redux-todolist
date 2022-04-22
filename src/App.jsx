import React from "react"
import { Provider } from "react-redux"

import store from "./redux/todosStore"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"

import styles from "./components/styles"

const App = () => {
	document.title = "My Redux Todo List"

	return (
		<Provider store={store}>
			<div style={styles.body}>
				<div style={styles.container}>
					<h2>My Persistent Redux Todo List</h2>
					<AddTodo />
					<TodoList />
				</div>
			</div>
		</Provider>
	)
}

export default App

