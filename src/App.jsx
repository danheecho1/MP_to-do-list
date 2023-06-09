import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
	const [newItem, setNewItem] = useState("");
	const [todos, setTodos] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setTodos((currentTodos) => {
			return [
				...currentTodos,
				{
					id: crypto.randomUUID(),
					title: newItem,
					completed: false,
				},
			];
		});
		console.log(`Submitted ${newItem}!!!`);
		console.log(todos);
		setNewItem("");
	};

	return (
		<>
			<div className="header">
				<h1>TDL v1</h1>
				<ul>
					<li>About</li>
				</ul>
			</div>
			<div className="new-item-div">
				<form onSubmit={handleSubmit}>
					<label>Add a new TDL</label>
					<input
						type="text"
						value={newItem}
						onChange={(e) => {
							setNewItem(e.target.value);
						}}
					/>
					<button type="submit">Add</button>
				</form>
			</div>
			<div className="lists-div">
				<div className="lists-div__pending-list-div">
					<h2>Pending TDL</h2>
					<ul>
						{todos
							.filter((todo) => {
								return todo.completed === false;
							})
							.map((todo) => {
								return (
									<li key={todo.id}>
										<p>{todo.title}</p>
										<button>Done</button>
										<button>Remove</button>
									</li>
								);
							})}
					</ul>
				</div>
				<div className="lists-div__completed-list-div">
					<h2>Completed TDL</h2>
					<ul>
						<li>
							<p>Test TD 1</p>
							<button>Archive</button>
						</li>
						<li>
							<p>Test TD 1</p>
							<button>Archive</button>
						</li>
						<li>
							<p>Test TD 1</p>
							<button>Archive</button>
						</li>
						<li>
							<p>Test TD 1</p>
							<button>Archive</button>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default App;

/* const todoItem = {
  id: "weird string"  crypto.randomUUID()
  title: "title", 
  completed: "false",
}
*/
