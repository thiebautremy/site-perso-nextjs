"use client";
import {
  ReactFragment,
  ReactElement,
  JSXElementConstructor,
  useRef,
  useCallback,
} from "react";
import { Toast } from "primereact/toast";
import { useEffect } from "react";

const Modal = (props: {
  action: (arg0: boolean) => void;
  setMessageModal: (arg0: string) => void;
  isVisibleModal: boolean;
  message:
    | string
    | number
    | boolean
    | ReactFragment
    | ReactElement<any, string | JSXElementConstructor<any>>
    | null
    | undefined;
}) => {
  const toast = useRef<Toast>(null);
  const handleShow = useCallback(() => {
    toast.current?.show({
      severity:
        props.message === "Message correctement envoyé" ? "success" : "error",
      summary:
        props.message === "Message correctement envoyé" ? "Succès" : "Erreur",
      detail: props.message,
    });
  }, [props.message]);
  const handleOnHide = () => {
    props.action(false);
    props.setMessageModal("");
  };

  useEffect(() => {
    props.message !== "" && handleShow();
  }, [handleShow, props.message]);

  return <Toast ref={toast} onHide={() => handleOnHide()} />;
};

export default Modal;
