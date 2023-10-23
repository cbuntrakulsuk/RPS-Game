import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Modal = ({ children }: Props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-black opacity-40 w-full h-full absolute z-40"></div>
      <div className="z-50 h-96 w-96 rounded-lg bg-white">
        <div className="m-7 text-darkText text-4xl font-bold tracking-normal">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
