import React, { useState, useEffect } from 'react';


const Todo = () => {
	const [todoList, setTodoList] = useState([]);
	const [todo, setTodo] = useState("");
	const [activeTab, setActiveTab] = useState("ALL");

	const handleDelete = (id) => {
    setTodoList((prev) => prev.filter((x) => x.id !== id));
}
	const handleStatus = (checked, id) => {
    setTodoList((prev) =>
        prev.map((x) => {
            if (x.id === id) {
                return {
                    ...x,
                    status: checked ? "COMPLETED" : "ACTIVE"
                };
            }
            return x;
        })
    );
};

	const filteredTodoList = todoList.filter((x, i) => {
		if (activeTab === "ALL") return true;
    return x.status === activeTab;
	});
	return (
		<div style={{ display: 'flex', flexDirection: "column", padding: "16px", backgroundColor: "#f3f4f6", minHeight: "100vh", }}>
			<div>
				<h1>My Tasks</h1>
			</div>
			<div style={{ minHeight: "70vh", backgroundColor: "white" }}>
				<div>
					<div style={{ display: 'flex', padding: '16px', gap: '16px' }}>
						<input style={{
							width: '70vw',
							height: '4vh',
							border: "1px solid #e5e7eb",
							borderRadius: "12px",
							boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
						}} type="text" placeholder='Go to gym' onChange={(e) => setTodo(e.target.value)} />
						<button style={{
							width: '20vw',
							border: "1px solid #e5e7eb",
							borderRadius: "12px",
							boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
							backgroundColor: "#4f46e5",
							color: "white",
							fontSize: "16px",
							fontWeight: "600",
							cursor: "pointer",
						}} onClick={() => {
							const todoObject = {
								id: crypto.randomUUID(),
								todo,
								status: "ACTIVE"
							}
							setTodoList((prev) => [...prev, todoObject]);
						}} >Add Task</button>
					</div>
					<div>
						<div style={{ display: "flex", gap: "16px", padding: "16px" }}>
							<button onClick={() => setActiveTab("ALL")}>All</button>
							<button onClick={() => setActiveTab("ACTIVE")}>Active</button>
							<button onClick={() => setActiveTab("COMPLETED")}>Completed</button>
						</div>
					</div>
					<div>
						{
							filteredTodoList?.length > 0 && filteredTodoList.map((x) => {
								return(
								<div key={x.id} style={{ display: 'flex', alignContent: 'center', alignItems: "center", width: "40vw", height: "5vh", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)", borderRadius: "12px", border: "1px solid #c8cacd", padding: '12px' }}>
									<input type='checkbox' checked={x.status === "COMPLETED"} onChange={(e) => handleStatus(e.target.checked, x.id)} />
									<span style={{ marginLeft: "16px" }}>{x?.todo}</span>
									<span style={{ marginLeft: "16px", fontWeight: 'bold' }}>{x?.status}</span>
									<div style={{ marginLeft: "auto" }}>
										<button onClick={() => handleDelete(x.id)}>Delete</button>
									</div>
								</div>
								)
							})
						}
					</div>

				</div>
			</div>
		</div>
	)
};

export default Todo;