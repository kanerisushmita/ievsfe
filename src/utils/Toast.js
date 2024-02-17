import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = (message, type) => {
  const toastType = type === "success" ? toast.success : toast.error;

  const toastId = `${type}_${message}`;

  if (!toast.isActive(toastId)) {
    return toastType(message, {
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      position: "top-center",
      toastId, 
    });
  }
};

export default Toast;
