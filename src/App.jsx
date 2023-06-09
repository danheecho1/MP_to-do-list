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

	const handleCompletion = (id) => {
		setTodos((currentTodos) => {
			return currentTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed: true };
				} else {
					return todo;
				}
			});
		});
	};

	const handleDeletion = (id) => {
		setTodos((currentTodos) => {
			return currentTodos.filter((todo) => {
				return todo.id !== id;
			});
		});
	};

	return (
		<>
			<div className="navbar">
				<p className="navbar__name">TDL v1</p>
				<ul>
					<li>About</li>
				</ul>
			</div>
			<form onSubmit={handleSubmit} className="new-item-form">
				<label>Add a new TDL</label>
				<div className="new-item-form__input-div">
					<input
						type="text"
						value={newItem}
						onChange={(e) => {
							setNewItem(e.target.value);
						}}
					/>
					<button type="submit">Add</button>
				</div>
			</form>
			<div className="lists-div">
				<div className="lists-div__pending-list-div">
					<h2>Pending TDL</h2>
					<ul className="lists-div__pending-list-div__ul">
						{todos.filter((todo) => {
							return todo.completed === false;
						}).length === 0 && "No pending tasks yet"}
						{todos
							.filter((todo) => {
								return todo.completed === false;
							})
							.map((todo) => {
								return (
									<li
										key={todo.id}
										className="lists-div__pending-list-div__ul__li">
										<p className="lists-div__pending-list-div__ul__li__title">
											{todo.title}
										</p>
										<div className="lists-div__pending-list-div__ul__li__buttons-div">
											<button
												onClick={() =>
													handleCompletion(
														todo.id,
														todo.completed
													)
												}>
												Done
											</button>
											<button
												onClick={() =>
													handleDeletion(todo.id)
												}>
												Remove
											</button>
										</div>
									</li>
								);
							})}
					</ul>
				</div>
				<div className="lists-div__completed-list-div">
					<h2>Completed TDL</h2>
					<ul className="lists-div__completed-list-div__ul">
          {todos.filter((todo) => {
							return todo.completed === true;
						}).length === 0 && "No completed tasks yet"}
						{todos
							.filter((todo) => {
								return todo.completed === true;
							})
							.map((todo) => {
								return (
									<li
										key={todo.id}
										className="lists-div__completed-list-div__ul__li">
										<p>{todo.title}</p>
										<button
											onClick={() =>
												handleDeletion(todo.id)
											}>
											Remove
										</button>
									</li>
								);
							})}
					</ul>
				</div>
			</div>
			<div className="attribution">
				Coded by{" "}
				<a href="https://www.github.com/danheecho1" target="_blank">
					Danny Cho
				</a>{" "}
				on 06/08/23.
			</div>
		</>
	);
};

export default App;
