"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import XMarkIcon from "../../../../assets/icons/x-mark.svg";
import CircleButton from "../circle-button/circle-button";
import styles from "./modal.module.css";

export function Modal({
  children,
  show,
}: {
  children: React.ReactNode;
  show: boolean;
}) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    router.back();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === ref.current) {
      e.stopPropagation();
      handleClose();
    }
  };

  return (
    <div ref={ref} className={styles.overlay} onClick={handleOverlayClick}>
      <CircleButton onClick={handleClose}>
        <XMarkIcon />
      </CircleButton>
      <dialog className={styles.modal} open={true}>
        {children}
      </dialog>
    </div>
  );
}
