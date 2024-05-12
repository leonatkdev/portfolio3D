import React from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({
  modal,
  setModal,
  title = "Lorem Ipsum",
  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultrices ultricies. Nullam nec purus ut libero ultrices ultricies. ",
  confirmText = "Confirm",
  onConfirm = () => {},
  cancelText = "Cancel",
  onCancel = () => {},
  children,
}) => {
  return (
    modal && (
      <div
        class="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div class="fixed inset-0 bg-[#1a1a1a] bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <IoClose
                    onClick={() => setModal(false)}
                    className="w-6 h-6 absolute top-2 right-4"
                  />

                  <div class="mt-3 text-center sm:mt-0 sm:text-left">
                    <h3
                      class="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      {title}
                    </h3>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">{desc}</p>
                    </div>
                  </div>
                </div>

                {children}
              </div>

              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-[#131838] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-900 sm:ml-3 sm:w-auto"
                  onClick={onConfirm}
                >
                  {confirmText}
                </button>
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={onCancel}
                >
                  {cancelText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
