import { createSlice } from "@reduxjs/toolkit"

export const todosSlice = createSlice({
	name: "todos",
	initialState: {
		todos: JSON.parse(localStorage.getItem("todos")) || [],
		selectedTodo: JSON.parse(localStorage.getItem("selectedTodo")) || null,
	},
	reducers: {
		addTodo: (state, action) => {
			const newTodo = {
				id: state.todos.length + 1,
				name: action.payload.name,
				completed: false,
			}
			state.todos = [...state.todos, newTodo]
			localStorage.setItem("todos", JSON.stringify(state.todos))
		},
		toggleTodo: (state, action) => {
			const newTodos = state.todos.map((todo) =>
				todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
			)
			state.todos = newTodos
			localStorage.setItem("todos", JSON.stringify(newTodos))
		},
		editTodo: (state, action) => {
			const newTodos = state.todos.map((todo) =>
				todo.id === action.payload.id ? { ...todo, name: action.payload.name } : todo
			)
			state.todos = newTodos
			localStorage.setItem("todos", JSON.stringify(newTodos))
		},
		selectTodo: (state, action) => {
			state.selectedTodo = action.payload.id
			localStorage.setItem("selectedTodo", JSON.stringify(state.selectedTodo))
		},
		deleteTodo: (state, action) => {
			const newTodos = state.todos.filter((todo) => todo.id !== action.payload.id)
			state.todos = newTodos
			localStorage.setItem("todos", JSON.stringify(newTodos))
		},
	},
})

export const { addTodo, deleteTodo, toggleTodo, selectTodo, editTodo } = todosSlice.actions
export default todosSlice.reducer

