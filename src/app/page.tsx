"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const redirectToAnotherScreen = () => {
    router.push('/todo');
  };

  return (
    <div className="bg-no-repeat bg-cover bg-center relative"><div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
        <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
          <div className="self-start hidden lg:flex flex-col  text-white">
            <img src="" className="mb-3" />
            <h1 className="mb-3 font-bold text-5xl">Hi, Welcome to         ToDo-Web </h1>
            <p className="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print,
              and publishing industries for previewing layouts and visual mockups</p>
          </div>
        </div>
        <div className="flex justify-center self-center  z-10">
          <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800"> Inicio de Sesion </h3>
              <p className="text-gray-500">Por favor inicie sesión en su cuenta.</p>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                <input className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="mail@gmail.com" />
              </div>
              <div className="space-y-2">
                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                  Contraseña
                </label>
                <input className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="Enter your password" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                  <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-800">
                    Recuerdame
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="text-green-400 hover:text-green-500">
                    Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                  onClick={redirectToAnotherScreen}
                >
                  Iniciar Sesión
                </button>
              </div>
            </div>
            <div className="pt-5 text-center text-gray-400 text-xs">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
