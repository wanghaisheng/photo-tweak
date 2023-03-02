import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import Image from "next/image";
import { Fragment, type Dispatch, type SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

type DemoModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const DemoModal = ({ isOpen, setIsOpen }: DemoModalProps) => {
  return (
    <>
      <button
        aria-label="open modal"
        onClick={() => setIsOpen(true)}
        className={twMerge(
          "w-fit rounded-md bg-slate-700 bg-opacity-80 px-4 py-2 text-sm font-medium text-white transition",
          "hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 active:scale-95",
          "focus:ring-2 focus:ring-slate-400"
        )}
      >
        Watch demo
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-lg bg-gray-800 p-1.5 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="sr-only">
                    How to use the app
                  </Dialog.Title>
                  <button
                    aria-label="close modal"
                    className="absolute top-5 right-5 rounded-full bg-gray-700 bg-opacity-80 p-2 text-white transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 active:scale-95"
                    onClick={() => setIsOpen(false)}
                  >
                    <X aria-hidden="true" className="h-4 w-4" />
                  </button>
                  <Image
                    src="/images/placeholder.gif"
                    alt="Demo"
                    width={672}
                    height={672}
                    className="aspect-square w-[672px] rounded-lg object-cover shadow-md"
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DemoModal;
