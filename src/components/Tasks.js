
import Task from './Task';

// eslint-disable-next-line no-unused-vars
const Tasks = ({ tasks, onDelete, onToggle}) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
