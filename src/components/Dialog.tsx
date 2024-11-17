import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const CustomDialog: React.FC<DialogProps> = ({
  open,
  onOpenChange,
  children,
  style,
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent" style={style}>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CustomDialog;
