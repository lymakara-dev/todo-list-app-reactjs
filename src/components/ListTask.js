import "./ListTask.css";

const ListTask = ({ title }) => {
  const handleDelete = () => {};
  return (
    <div className="task">
      <p>{title}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ListTask;
