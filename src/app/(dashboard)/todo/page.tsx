
import { getAllTodos } from "@/api";
import AddTask from "@/src/components/AddTask";
import TodoList from "@/src/components/TodoList";


export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <main>
        <div className='text-center my-5 flex flex-col gap-4'>
          <AddTask />
        </div>
        <TodoList tasks={tasks} />
    </main>
  );
}