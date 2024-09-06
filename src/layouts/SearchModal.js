import { Modal } from "react-bootstrap";

const SearchModal = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="modal fade search-modal"
      aria-modal="true"
      role="dialog"
      centered
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form_group">
          <input
            type="text"
            className="form_control"
            placeholder="Search here"
            name="search"
          />
          <label>
            <i className="fa fa-search" />
          </label>
        </div>
      </form>
    </Modal>
  );
};
export default SearchModal;
