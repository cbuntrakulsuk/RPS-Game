import { ReactNode } from "react";
import ImageRules from "../assets/images/image-rules.svg";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: Props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black opacity-40 w-full h-full absolute sm:bg-white sm:opacity-100"></div>
      <div className="z-50 h-[415px] w-[400px] rounded-lg bg-white absolute top-44">
        <div className="m-7 text-darkText text-4xl font-bold tracking-normal flex sm:justify-center">
          {children}
          <button
            className="flex items-center flex-grow flex-row-reverse sm:hidden"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="black"
              className="w-6 h-6 scale-150 opacity-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center">
          <img className="py-5" src={ImageRules} />
        </div>
      </div>
      <button
        className="hidden sm:absolute sm:bottom-40 sm:block"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="black"
          className="w-6 h-6 scale-150 opacity-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Modal;
