import React from "react";
import "./style.css";
import {
  CarOutlined,
  InsuranceOutlined,
  HeatMapOutlined,
} from "@ant-design/icons";
function Ads() {
  return (
    <>
      <div className="ads">
        <div className="text">
          <div className="yolo">YOLO</div>
          <p className="uns">UNSTOPABLE</p>
          <p className="des">COLOSSEUM COLLECTION</p>
          <p className="des mb-3">
          Đại diện cho sự mạnh mẽ và phiêu lưu
          </p>
          <a href="/">don't just look, buy it now!</a>
        </div>
      </div>
      <div className="ads__bot p-5 flex items-center justify-center">
        <div
                  className="ads_bot_cen flex items-center justify-between		 "
        >
          <div className="item">
            <CarOutlined />
            <span>FREESHIP ĐƠN HÀNG 700K</span>
          </div>
          <div className="item">
            <InsuranceOutlined />
            <span>BẢO HÀNH 10 NĂM</span>
          </div>
          <div className="item">
            <HeatMapOutlined />
            <span>ĐỔI TRẢ MIỄN PHÍ TRONG VÒNG 3 NGÀY</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Ads;
