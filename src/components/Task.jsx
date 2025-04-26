function Task({ name, date, onDelete }) {
  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-between mt-5 max-w-2xl mx-auto gap-4 bg-white border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
      role="listitem"
      aria-label={`Task ${name} due on ${date}`}
    >
      <div className="w-full sm:w-1/2 text-base sm:text-lg font-semibold text-gray-800 border-b sm:border-b-0 sm:border-r border-gray-200 pr-4 pb-2 sm:pb-0 text-center sm:text-left">
        {name}
      </div>

      <div className="w-full sm:w-1/3 text-base text-gray-600 border-b sm:border-b-0 sm:border-r border-gray-200 pr-4 pb-2 sm:pb-0 text-center sm:text-left">
        {date}
      </div>

      <button
        onClick={onDelete}
        className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
        aria-label={`Delete task ${name}`}
      >
        Delete
      </button>
    </div>
  );
}
export default Task;
