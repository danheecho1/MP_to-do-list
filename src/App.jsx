import React from "react";

const App = () => {
	return (
		<>
			<div className="header">
				<h1>TDL v1</h1>
				<ul>
					<li>About</li>
				</ul>
			</div>
			<div className="new-item-div">
				<h2>Add a new TDL</h2>
				<form>
					<input type="text" />
					<button type="submit">Add</button>
				</form>
			</div>
			<div className="lists-div">
				<div className="lists-div__pending-list-div">
					<h2>Pending TDL</h2>
					<ul>
						<li>
							<p>Test TD 1</p>
							<button>Done</button>
							<button>Remove</button>
						</li>
						<li>
							<p>Test TD 1</p>
							<button>Done</button>
							<button>Remove</button>
						</li>
						<li>
							<p>Test TD 1</p>
							<button>Done</button>
							<button>Remove</button>
						</li>
						<li>
							<p>Test TD 1</p>
							<button>Done</button>
							<button>Remove</button>
						</li>
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
