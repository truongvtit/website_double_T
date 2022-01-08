import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./style.css";
import { getDetail } from '../../state/actions';
import { useParams } from "react-router-dom";
import { addCart } from "../../state/actions";
import "./style.css";
import { useHistory } from "react-router-dom";
function Detail() {
  const param = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const dataDetail = useSelector((state) => state.getDetail.data);
  useEffect(() => {
    dispatch(getDetail(param.id));
  }, [])
const handleAddcart =()=>{
  dispatch(addCart(dataDetail));
}
  return (
    <div className="Detail">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-4">
          <img
            src={dataDetail ? dataDetail.img : null}
            alt=""
          />
        </div>
        <div className="col-md-4">
          <div className="card">
            <p className="colo">{dataDetail ? dataDetail.trademark : null}</p>
            <div className="name">{dataDetail? dataDetail.name: null}</div>
            <div className="price mb-4">
              <p className="order">{dataDetail ? dataDetail.price: null}</p>
              <strike letter className="old ml-1">
                {dataDetail? dataDetail.oldPrice: null}
              </strike>
            </div>
            <div className="status">
              tình trạng: <span style={{color:"rgb(59, 177, 0)"}} className="st">{dataDetail ?dataDetail.status : null}</span> 
            </div>
            <p><span style={{color:"red"}}>GIẢM 20%</span> CHO VÒNG TAY MUA KÈM:</p>
            <div className="group__button mt-10">
              <button
               onClick={() => {
                history.push({ pathname: `/payment/${dataDetail.id}` });
              }}
              className="payment">THANH TOÁN NGAY</button>
              <br/>
              <button onClick={handleAddcart} className="ADD__CART mt-3">THÊM VÀO GIỎ HÀNG</button>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="line"></div>
      <div className="des-product">
        <h2><b>MÔ TẢ SẢN PHẨM</b></h2>
        <p>Curnon là thương hiệu Đồng hồ thời trang đầu tiên của Việt Nam, được hình thành và phát triển bởi đội ngũ những con người Việt Nam, mang theo cảm hứng và sự khát khao của tuổi trẻ. Chúng tôi tạo ra những sản phẩm phụ kiện không thể thiếu, với thiết kế hiện đại và mức giá không thể hợp lý hơn.</p>
        <p>Tôn chỉ của giới trẻ là thay đổi và chuyển động, cũng là những điều dòng đồng hồ đầu tiên của Curnon theo đuổi trong từng mẫu thiết kế. Thời trang, kiến tạo và khát khao tuổi trẻ chính là tuyên ngôn bạn sẽ mang theo bên mình cùng với đồng hồ Curnon.</p>
        <h2><b>THÔNG SỐ  KỸ THUẬT</b></h2>
        <span>- Đường kính: 40mm</span>
        <hr/>
        <span>- Chất liệu vỏ: Thép không gỉ 316L</span>
        <hr/>
        <span>- Độ dày: 7mm</span>
        <hr/>
        <span>- Kích cỡ dây: 20mm</span>
        <hr/>
        <span>- Chất liệu dây: Dây kim loại</span>
        <hr/>
        <span>- Loại máy: Miyota Quartz</span>
        <hr/>
        <span>- Mặt kính: Sapphire </span>
        <hr/>
        <span>- Chống nước: 3ATM</span>
        <hr/>
        <h2><b>CHÍNH SÁCH BẢO HÀNH</b></h2>
        <p>- Đồng hồ Curnon được bảo hành 10 năm đối với những lỗi từ nhà sản xuất và thay pin miễn phí trọn đời.</p>
        <p>- Trong 1 năm đầu tiên khi sử dụng sản phẩm, Curnon hỗ trợ bảo hành miễn phí 1 lần với những lỗi người dùng như: vỡ, nứt kính; hấp hơi nước; va đạp mạnh, tai nạn dẫn đến rơi linh kiện bên trong mặt đồng hồ,…</p>
        <p>- Để được bảo hành sản phẩm, quý khách vui lòng gửi đầy đủ thông tin bao gồm tên, số điện thoại người đặt hàng, sản phẩm đã mua và tình trạng sản phẩm (khuyến khích có hình ảnh đi kèm) về địa chỉ email cskh@curnonwatch.com.</p>
        <span>Lưu ý: Chính sách bảo hành <b>KHÔNG</b> được áp dụng đối với:</span>
        <hr/>
        <p>* Vòng tay và dây đồng hồ</p>
        <p>* Sản phẩm xuống màu sau một thời gian dài sử dụng</p>
        <p>* Va đập mạnh gây biến dạng khung đồng hồ</p>
        <p>Với những vấn đề kể trên, Curnon hỗ trợ khách hàng sửa chữa tính phí tùy thuộc vào mức độ và tình trạng của sản phẩm. Quá trình sửa chữa sẽ chỉ được thực hiện khi có sự xác nhận của quý khách.</p>
      </div>
    </div>
  );
}
export default Detail;
