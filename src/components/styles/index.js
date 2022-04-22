const styles = {
	body: {
		width: "100vw",
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	container: {
		width: "30vw",
		padding: "1rem",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "1rem",
		border: "0.15rem solid black",
	},
	addTodoForm: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	addTodoInput: {
		flex: 1,
	},
	editTodoForm: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	editTodoInput: {
		flex: 1,
	},
	todoList: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		marginTop: "1rem",
	},
	todoItem: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderRadius: "1rem",
		padding: "0.25rem",
		marginBottom: "0.1rem",
	},
	completed: {
		textDecoration: "line-through",
	},
}

export default styles

