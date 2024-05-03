import { getAllTodos } from "@/api";
import AddTask from "@/src/components/AddTask";
import TodoList from "@/src/components/TodoList";
import Container from "@/src/components/Container";
import Header from "@/src/components/Header";

export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <main className="bg-black dark:bg-white">
      <Header> ToDo List </Header>
      <Container>
        <div className='text-center my-5 flex flex-col gap-4'>
          <AddTask />
        </div>
        <TodoList tasks={tasks} />
      </Container>
    </main>
  );
}
