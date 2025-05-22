// components/Modal.tsx
"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
import clsx from "clsx";

type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function Modal({
  open,
  onOpenChange,
  title,
  children,
  className,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
        <Dialog.Content
          className={clsx(
            "fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-xl focus:outline-none",
            className
          )}
        >
          <div className="flex justify-between items-center mb-4">
            {title && (
              <Dialog.Title className="text-xl font-semibold">
                {title}
              </Dialog.Title>
            )}
            <Dialog.Close asChild>
              <button className="text-gray-500 hover:text-gray-800">
                <Cross2Icon className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
