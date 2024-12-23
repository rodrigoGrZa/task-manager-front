import useTaskStore from "../store/useTaskStore";
import CheckmarkIcon from "./checkmark-icon";
import Spinner from "./spinner";

const TaskCard = ({ task }) => {
  const { saving, modifyTask, editTaskWithDebounce } = useTaskStore();
  const { id, name, text, completed, creationDate, endingDate } = task;

  const handleToggleComplete = async () => {
    await modifyTask(id, { completed: !task.completed });
  };

  const handleTextClick = (e) => {
    e.stopPropagation();
  };

  const handleTextChange = (e) => {
    const field = e.target.getAttribute("data-field");
    editTaskWithDebounce(id, { [field]: e.target.innerText });
  };

  return (
    <div
      className={`relative flex items-center space-x-4 bg-gray-800 text-white rounded-lg p-6 shadow-md cursor-pointer transition
        ${completed ? "opacity-75" : "opacity-100"} hover:bg-gray-700`}
    >
      <div
        onClick={() => handleToggleComplete()}
        className={`w-8 h-8 flex-shrink-0 rounded-full border-2
          ${completed ? "bg-green-600 border-green-600" : "border-gray-500"}`}
      >
        {completed && <CheckmarkIcon />}
      </div>

      <div className="flex flex-col w-full" >
        <h3
          className={`text-2xl font-bold mb-2 ${completed ? "line-through" : ""}`}
          suppressContentEditableWarning={true}
          contentEditable
          onClick={handleTextClick}
          onInput={handleTextChange}
          data-field="name"
          style={{ outline: "none" }}
        >
          {name}
        </h3>
        <p
          className={`text-gray-400 mb-4 ${completed ? "line-through" : ""}`}
          suppressContentEditableWarning={true}
          contentEditable
          onClick={handleTextClick}
          onInput={handleTextChange}
          data-field="text"
          style={{ outline: "none", wordWrap: "break-word", maxWidth: "65%" }}
        >
          {text}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            Created: {new Date(creationDate).toLocaleDateString()}
          </p>
          {endingDate && (
            <p className="text-sm text-gray-500 text-right">
              Finished: {new Date(endingDate).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>

      {saving.includes(task.id) && (
        <div className="absolute top-2 right-2">
          <Spinner size={24} thickness={2} />
        </div>
      )}
    </div>
  );
};

export default TaskCard;
