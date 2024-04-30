"use client";

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  const [newTaskDate, setNewTaskDate] = useState<string>("");
  const [newTaskImportance, setNewTaskImportance] = useState<string>("");


  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
      date: new Date().toISOString(),
      importance: newTaskImportance,
      done: false,
    });
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className='btn btn-primary w-full'
      >
        Añadir Tarea <AiOutlinePlus className='ml-2' size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className='font-bold text-lg'>Nueva Tarea</h3>
          <div className='modal-action'>
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full'
            />
            <input
              type='date'
              className='input input-bordered w-full'
              placeholder='Type here'

            />
            <select
              value={newTaskImportance}
              className='input input-bordered w-full'
              placeholder='Selecciona una opción'

            />
            <button type='submit' className='btn'>
              Guardar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
