import TodoItem from "./Todoitem";
const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem todoDate={item.duedate} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
