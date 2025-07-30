import Sidebar from "../../components/admin/Sidebar";
import TaskFilter from "../../components/tasks/TaskFilter";

const TaskFilterPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Admin Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <TaskFilter />
      </div>
    </div>
  );
};

export default TaskFilterPage;
