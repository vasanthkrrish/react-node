import UserSidebar from "./UserSidebar";
import TaskFilter from "../../components/tasks/TaskFilter";

const TaskFilterPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Admin Sidebar */}
      <UserSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <TaskFilter />
      </div>
    </div>
  );
};

export default TaskFilterPage;
