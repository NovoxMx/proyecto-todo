"use client";

import { useState, useEffect } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";
import { ITask } from "@/types/tasks";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
  const [date, setDate] = useState<string>(task.date);
  const [importance, setImportance] = useState<string>(task.importance);
  const [isChecked, setIsChecked] = useState<boolean>(task.done); 

  const handleCheckboxChange = async () => {
    setIsChecked(!isChecked); 
    await editTodo({
      id: task.id,
      text: task.text,
      date: task.date,
      importance: task.importance,
      done: !isChecked, 
    });
  };

  const handleSubmitEditTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
      date: new Date().toISOString(),
      importance: importance,
      done: isChecked,
    });
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDeleted(false);
    router.refresh();
  };

  useEffect(() => {
    setIsChecked(task.done);
  }, [task.done]);

  return (
    <tr key={task.id} >
      <td className={isChecked ? "bg-black text-white" : ""}>{task.text}</td>
      <td className={isChecked ? "bg-black text-white" : ""}>{task.date}</td>
      <td className={isChecked ? "bg-black text-white" : ""}>{task.importance}</td>
      <td className={isChecked ? "bg-black text-white" : ""}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </td>
      <td className={isChecked ? "flex gap-5 " : "flex gap-5"}>
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor='pointer'
          className='text-blue-500'
          size={25}
        />
        <FiTrash2
          onClick={() => setOpenModalDeleted(true)}
          cursor='pointer'
          className='text-red-500'
          size={25}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo} className='p-5'>
            <h3 className='font-bold text-lg mb-3'>Editar Tarea</h3>
            <input
              value={taskToEdit}
              onChange={(e) => setTaskToEdit(e.target.value)}
              type='text'
              placeholder='Tarea'
              className='input input-bordered mb-3'
            />
            <input 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              placeholder="Fecha"
              className='input input-bordered mb-3'
            />
            <select
              value={importance}
              onChange={(e) => setImportance(e.target.value)}
              placeholder='Importancia'
              className='input input-bordered mb-3'
            >
              <option value=''>Importancia</option>
              <option value='baja'>Baja</option>
              <option value='media'>Media</option>
              <option value='alta'>Alta</option>
            </select>
            <button type='submit' className='btn btn-primary'>
              Enviar
            </button>
          </form>
        </Modal>
        <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
          <div className='p-5'>
            <h3 className='text-lg mb-3'>
              ¿Estás seguro que deseas eliminar esta tarea?
            </h3>
            <div className='flex justify-center'>
              <button onClick={() => handleDeleteTask(task.id)} className='btn btn-danger mr-3'>
                Sí, eliminar
              </button>
              <button onClick={() => setOpenModalDeleted(false)} className='btn btn-secondary'>
                Cancelar
              </button>
            </div>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
