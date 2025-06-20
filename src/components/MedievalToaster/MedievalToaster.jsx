import { Toaster } from "react-hot-toast";
import s from "./MedievalToaster.module.css";

const MedievalToaster = () => {
  return (
    <Toaster
      toastOptions={{
        className: s.medievalToast,
        duration: 4000,
      }}
    />
  );
};

export default MedievalToaster;
