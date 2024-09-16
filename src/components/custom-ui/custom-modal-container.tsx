import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export interface ModalContainerProps {
  title?: string | React.ReactNode;
  show: boolean;
  hasCloseButton?: boolean;
  handleClose?: () => void;
  children?: React.ReactNode;
  modalClass?: string;
}

export default function CustomModalContainer({
  show,
  handleClose,
  children,
  title,
  modalClass,
  hasCloseButton = false,
}: ModalContainerProps) {
  return (
    <>
      <AlertDialog open={show}>
        <AlertDialogContent className={cn("md:w-[27rem]", modalClass)}>
          <AlertDialogDescription className="hidden">
            <AlertDialogTitle>{title}</AlertDialogTitle>
          </AlertDialogDescription>
          {hasCloseButton && (
            <span
              className="absolute right-4 top-4 cursor-pointer text-[#8F8F8F]"
              onClick={handleClose}
            >
              <X width={17} height={17} />
            </span>
          )}
          {children}
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
