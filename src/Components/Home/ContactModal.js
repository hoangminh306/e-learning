import React from "react";
// import "../../Assets/Styles/style.scss";

const ContactModal = () => {
  return (
    <div className="modal" id="contactModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              Yêu cầu ONLINE STUDY phản hồi để hỗ trợ thông tin, chương trình
              học, chỉ tiêu - điều kiện tuyển sinh - học phí,... hoàn toàn FREE
            </h5>
            <button
              title="Close (Esc)"
              type="button"
              className="modal-close"
              data-dismiss="modal"
            >
              <i className="fa fa-times"></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="input-group mb-3 ">
              <input
                type="text"
                className="input_email"
                placeholder="Email của bạn"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows={5}
                id="comment"
                defaultValue={""}
                placeholder="Nội dung cần được hỗ trợ"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="contact__btn"
            >
             Gửi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;