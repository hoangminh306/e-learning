import React from "react";
import Footer from "../../Layouts/Home/Footer";
import "../../Assets/Styles/style.scss";
import Header from "../../Layouts/Home/Header";
import { Formik, Form, Field } from "formik";
import UserService, { userSchema } from "../../Services/User";

import imgBallon from "../../Assets/images/intro_ballon.png";
import intro_city from "../../Assets/images/intro_city.png";
import why_choice_1 from "../../Assets/images/intro_1.jpg";
import why_choice_2 from "../../Assets/images/intro_2.png";
import why_choice_3 from "../../Assets/images/intro_3.jpg";
import why_choice_4 from "../../Assets/images/intro_4.jpg";
import why_choice_5 from "../../Assets/images/intro_5.jpg";
import why_choice_6 from "../../Assets/images/intro_6.png";
import SignUpModal from "../../Components/Home/SignUpModal";
import Contact from "../../Components/Home/Contact";

const IntroduceScreen = () => {
  return (
    <>
      <Header />
      <div className="introduce">
        <div className="introduce__container-top">
          <div className="introduce__background row">
            <div className="introduce__img col-6">
              <img src={imgBallon} alt="ballon"></img>
            </div>
            <div className="introduce__form col-6">
              <div className="introduce__form--container">
                <h5 className="introduce__title">
                  TRẢI NGHIỆM PHƯƠNG PHÁP HỌC HOÀN TOÀN MỚI
                </h5>
                <p>
                  Nếu bạn muốn học để trở thành một lập trình viên, trải nghiệm
                  phương pháp học Online tự chủ hiệu quả với sự hỗ trợ 1 – 1 của
                  chính các chuyên gia đang làm việc trong ngành, tha hồ mở rộng
                  networking với các tiền bối và nhà tuyển dụng
                </p>
                <Formik
                  initialValues={{
                    taiKhoan: "",
                    matKhau: "",
                    hoTen: "",
                    soDT: "",
                    maNhom: "GP01",
                    email: ""
                  }}
                  validationSchema={userSchema}
                  onSubmit={values => {
                      UserService.signup(values)
                      .then(res => {
                        alert("dk thành công");
                        // this.props.history.push('/')
                      })
                      .catch(err => {
                        alert("dk không thành công");
                        console.log(err);
                      })           
                  }}
                  render={({ handleChange, errors, touched, ...formikProps }) => {
                    console.log(errors);
                    return (
                      <Form>
                        <Field
                          type= "text"
                          name="hoTen"
                          onChange={handleChange}
                          className="form-control introduce__input"
                          placeholder="Họ tên"
                        />
                        <Field
                          type= "text"
                          name="taiKhoan"
                          onChange={handleChange}
                          className="form-control introduce__input"
                          placeholder="Tài khoản"
                        />
                        <Field
                          type= "password"
                          name="matKhau"
                          onChange={handleChange}
                          className="form-control introduce__input"
                          placeholder="Mật khẩu"
                        />
                        <Field
                          type= "text"
                          name="soDT"
                          onChange={handleChange}
                          className="form-control introduce__input"
                          placeholder="Số điện thoại"
                        />
                        <Field
                          type= "text"
                          name="email"
                          onChange={handleChange}
                          className="form-control introduce__input"
                          placeholder="Email"
                        />
                      </Form>
                    )
                  }}
                />                
                <div className="form-group">
                  <button type="submit" className="introduce__btn--signup">
                    ĐĂNG KÝ NGAY
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="intro__img--city">
            <img src={intro_city} alt="img_city"></img>
          </div>
        </div>
        <div className="introduce__container-bottom">
          <div className="row">
            <div className="col-md-12">
              <h3 className="introduce__bottom-title">
                TẠI SAO CHỌN ONLINE STUDY?
              </h3>
              {/* item 1 */}
              <div className="col-md-12 introduce__bottom-item">
                <div className="col-md-6 introduce__bottom__left">
                  <p className="introduce__bottom-item-title">
                    Trải nghiệm <b>phương pháp học tập hoàn toàn mới</b>
                  </p>
                  <div className="introduce__bottom__left-content">
                    Trên thế giới, học online đã và đang chứng minh là xu hướng
                    của giáo dục trong thời đại mới với các ưu điểm không thể
                    phủ nhận: học mọi lúc, mọi nơi phù hợp nhất với hoàn cảnh và
                    điều kiện thời gian của người học, tiết kiệm chi phí đi lại,
                    nội trú (ăn ở) cho sinh viên.
                  </div>
                </div>
                <div className="col-md-6 introduce__bottom__right">
                  <img src={why_choice_1} alt="img 1"></img>
                </div>
                <div className="introduce-dot"></div>
              </div>
              {/* item 2 */}
              <div className="col-md-12 introduce__bottom-item">
                <div className="col-md-6 introduce__bottom__left">
                  <img
                    className="introduce__image"
                    src={why_choice_2}
                    alt="img 1"
                  ></img>
                </div>
                <div className="col-md-6 introduce__bottom__right">
                  <p className="introduce__bottom-item-title-right">
                    Trải nghiệm <b>phương pháp học tập hoàn toàn mới</b>
                  </p>
                  <div className="introduce__bottom__left-content">
                    Trên thế giới, học online đã và đang chứng minh là xu hướng
                    của giáo dục trong thời đại mới với các ưu điểm không thể
                    phủ nhận: học mọi lúc, mọi nơi phù hợp nhất với hoàn cảnh và
                    điều kiện thời gian của người học, tiết kiệm chi phí đi lại,
                    nội trú (ăn ở) cho sinh viên.
                  </div>
                </div>
                <div className="introduce-dot"></div>
              </div>
              {/* item 3 */}
              <div className="col-md-12 introduce__bottom-item">
                <div className="col-md-6 introduce__bottom__left">
                  <p className="introduce__bottom-item-title">
                    Học cùng <b>nhà tuyển dụng</b>
                  </p>
                  <div className="introduce__bottom__left-content">
                    ONLINE STUDY tạo cơ hội cho sinh viên được giao tiếp, tìm
                    hiểu nhu cầu của nhà tuyển dụng tương lai ngay từ khi bắt
                    đầu học. Sinh viên có thể hiểu rõ công việc đòi hỏi kiến
                    thức gì và nhà tuyển dụng cần nhân sự như thế nào để hoàn
                    thiện kiến thức chuyên môn cho phù hợp. Tại ONLINE STUDY, có
                    thể thấy danh sách hơn 800 mentor có rất nhiều "Khủng long"
                    trong ngành CNTT, họ đồng thời chính là nhà tuyển dụng sinh
                    viên sau này.
                  </div>
                </div>
                <div className="col-md-6 introduce__bottom__right">
                  <img src={why_choice_3} alt="img 3"></img>
                </div>
                <div className="introduce-dot"></div>
              </div>
              {/* item 4 */}
              <div className="col-md-12 introduce__bottom-item">
                <div className="col-md-6 introduce__img--center introduce__bottom__left">
                  <img
                    className="introduce__image"
                    src={why_choice_4}
                    alt="img 4"
                  ></img>
                </div>
                <div className="col-md-6 introduce__bottom__right">
                  <p className="introduce__bottom-item-title-right">
                    Xây dựng <b>mạng lưới công việc rộng lớn</b>
                  </p>
                  <div className="introduce__bottom__left-content">
                    Sinh viên ONLINE STUDY rất đa dạng về đối tượng theo học: từ
                    học sinh, sinh viên đến các LTV, nghiên cứu sinh… gia nhập
                    một cộng đồng đa dạng như vậy bạn sẽ học được rất nhiều cả
                    về kiến thức học lẫn kiến thức về cuộc sống.
                    <br></br>
                    Mentor, bạn cùng học vừa là bạn học, thầy dạy, nhưng cũng
                    chính là nhà tuyển dụng, đồng nghiệp, đối tác, khách hàng
                    trong tương lai.
                  </div>
                </div>
                <div className="introduce-dot"></div>
              </div>
              {/* item 5 */}
              <div className="col-md-12 introduce__bottom-item">
                <div className="col-md-6 introduce__bottom__left">
                  <p className="introduce__bottom-item-title">Sớm đi làm</p>
                  <div className="introduce__bottom__left-content">
                    Với trang bị vốn kiến thức từ lý thuyết đến thực tế… bạn đã
                    có thể tự tin bước chân vào sự nghiệp trong ngành CNTT ngay
                    sau 1,5 năm học (tương đương kết thúc 3 học kỳ đầu tiên).
                  </div>
                </div>
                <div className="col-md-6 introduce__bottom__right introduce__img--center">
                  <img src={why_choice_5} alt="img 5"></img>
                </div>
                <div className="introduce-dot"></div>
              </div>
              {/* item 6 */}
              <div className="col-md-12 introduce__bottom-item">
                <div className="col-md-6 introduce__img--center introduce__bottom__left">
                  <img
                    className="introduce__image"
                    src={why_choice_6}
                    alt="img 6"
                  ></img>
                </div>
                <div className="col-md-6 introduce__bottom__right">
                  <p className="introduce__bottom-item-title-right">
                    Tốt nghiệp với{" "}
                    <b>
                      tấm bằng giá trị và vô vàn kĩ năng, trải nghiệm thực tế
                    </b>
                  </p>
                  <div className="introduce__bottom__left-content">
                    Bằng Kỹ sư chuyên ngành Kỹ thuật phần mềm Đại học FPT được
                    Bộ Giáo dục công nhận, được học lên Thạc sĩ, Tiến sĩ (chỉ
                    sau 2,5-3 năm học)
                  </div>
                </div>
                <div className="introduce-dot"></div>
              </div>
            </div>
          </div>
          <div>
            <button className="btn__signup" data-toggle="modal" data-target="#modalSignUp">
              ĐĂNG KÝ NGAY
            </button>
          </div>
        </div>
      </div>
      <Contact/>
      <SignUpModal/>
      <Footer />
    </>
  );
};

export default IntroduceScreen;
