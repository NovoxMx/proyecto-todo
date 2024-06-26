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
  const [newTaskImportance, setNewTaskImportance] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!newTaskValue || !newTaskImportance) {
      return;
    }

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
      date: formattedDate,
      importance: newTaskImportance,
      done: false,
    });

    setNewTaskValue("");
    setNewTaskImportance("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Añadir Tarea <AiOutlinePlus className="ml-2" size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo} className="">
          <h3 className="font-bold text-lg">Nueva Tarea</h3>
          <div className="modal-action grid flex justify-center">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mb-4 ml-2"
              required
            />
            <input
              type="date"
              className="input input-bordered w-full mb-4"
              required
            />
            <select
              value={newTaskImportance}
              onChange={(e) => setNewTaskImportance(e.target.value)}
              className="input input-bordered w-full mb-4"
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="baja">Baja</option>
              <option value="media">Media</option>
              <option value="alta">Alta</option>
            </select>
            <button type="submit" className="btn w-full">
              Guardar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;

