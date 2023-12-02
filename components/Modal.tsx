import { MouseEventHandler, ReactNode, useEffect } from "react";
import ClickAwayHandler from "@/components/ClickAwayHandler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

type Props = {
  toggleModal: Function;
  children: ReactNode;
  className?: string;
};

export default function Modal({ toggleModal, className, children }: Props) {
  return (
    <div className="overflow-y-auto py-2 fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center fade-in z-30">
      <ClickAwayHandler
        onClickOutside={toggleModal}
        className={`m-auto w-11/12 max-w-2xl ${className || ""}`}
      >
        <div className="slide-up m-auto relative border-neutral-content rounded-2xl border-solid border shadow-2xl p-5 bg-base-100">
          <div
            onClick={toggleModal as MouseEventHandler<HTMLDivElement>}
            className="absolute top-3 right-3 btn btn-sm outline-none btn-circle btn-ghost"
          >
            <FontAwesomeIcon icon={faClose} className="w-4 h-4 text-neutral" />
          </div>
          {children}
        </div>
      </ClickAwayHandler>
    </div>
  );
}
