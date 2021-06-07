import ReactModal from "react-modal";
import FormOperation from "./formOperation";
import FormMovement from "./formMovement";
ReactModal.setAppElement("#root");
function Modal(props: {
  isOpen: boolean;
  closeModal: Function;
  content: string;
  movementId: string;
  user: string;
}): JSX.Element {
  const { isOpen, closeModal, content, movementId, user } = props;
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() =>
        closeModal({ isOpen: false, content: content, movementId: movementId })
      }
      className="modal"
      bodyOpenClassName='bodyModal'

      overlayClassName="overlay"
    >
      {content === "operation" ? (
        <FormOperation
          user={user}
          closeModal={() =>
            closeModal({
              isOpen: false,
              content: content,
              movementId: movementId,
            })
          }
        />
      ) : (
        <FormMovement
          id={movementId}
          closeModal={() =>
            closeModal({
              isOpen: false,
              content: content,
              movementId: movementId,
            })
          }
        />
      )}
    </ReactModal>
  );
}
export default Modal;
