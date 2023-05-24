import './App.css';
import headerImg from "./images/header.png";
import goldPlateImg from "./images/gold-plate.png";
import priceBg from "./images/price-bg.png";
import shopImg from "./images/shop.svg";
import logoImg from "./images/logo.png";
import bctImg from "./images/bo-cong-thuong.svg";
import desktopHeader from "./images/desktop-header.png";
import frontCoin from "./images/front-coin.png";
import backCoin from "./images/back-coin.png";

function App() {
  return (
    <div className="App">
      <header>
        <img src={headerImg} alt='Phu Quy Header' className='header__image' />

        <div className='header-desktop'>
          <img src={desktopHeader} alt='Phu Quy Header' className='header__desktop-image' />
          <ul>
            <li>Cửa hàng: 30 Trần Nhân Tông, Hai Bà Trưng, Hà Nội</li>
            <li>Cửa hàng: 329 Cầu Giấy, Cầu Giấy, Hà Nội</li>
            <li>VPGD: 175 Hàm Nghi, P.Nguyễn Thái Bình, Q1, TP.HCM</li>
          </ul>
        </div>

      </header>

      <h1 className='primary-header header-text'>
        Thần tài Phú Quý<br />
        <span>1 lượng vàng 999.9</span>
      </h1>


      <section className='query-area query-area__content'>
        <img src={goldPlateImg} alt="Vàng thần tài Phú Quý" className='gold-plate' />
        <div className='query-area__right-block'>
          
          <div className='query-area__price'>
            <div className='query-area__price-btn'>
              <img src={priceBg} alt="" />
              <div className='query-area__price-content'>
                <div>GIÁ MUA VÀO</div>
                <b>54.000.000đ</b>
              </div>
            </div>

            <div className='query-area__price-btn'>
              <img src={priceBg} alt="" />
              <div className='query-area__price-content'>
                <div>GIÁ BÁN RA</div>
                <b>55.000.000đ</b>
              </div>
            </div>
          </div>

          <p className='query-time'>
            Tra cứu vào lúc: 19/05/2023 16:00
          </p>
        </div>
      </section>

      <section className='product-info'>
        <table className='product-info-table'>
          <tbody>
            <tr>
              <td>Mã sản phẩm</td>
              <td>SKU</td>
            </tr>

            <tr>
              <td>Thương hiệu</td>
              <td>Phú Quý </td>
            </tr>

            <tr>
              <td>Định lượng</td>
              <td>10 chỉ (1 lượng)</td>
            </tr>

            <tr>
              <td>Chất liệu</td>
              <td>Vàng 24K (vàng ta 999.9)</td>
            </tr>

            <tr>
              <td>Độ tinh khiết</td>
              <td>999.9</td>
            </tr>

            <tr>
              <td>Xuất xứ</td>
              <td>Việt Nam</td>
            </tr>

            <tr>
              <td>Khối lượng</td>
              <td>37.5 gram</td>
            </tr>

            <tr>
              <td>Kích thước</td>
              <td>38.5 mm</td>
            </tr>

            <tr>
              <td>Độ dày</td>
              <td>3.4 mm</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className='property'>
        TÍCH TRỮ AN TOÀN VÀ <br />ĐƯỢC BẢO CHỨNG BỞI PHÚ QUÝ
      </section>

      <section className='signification query-area'>
        <h2 className='secondary-header'>Ý nghĩa sản phẩm</h2>
        <p>Là biểu tượng của sự thịnh vượng, no đủ và sung túc -
          hình ảnh ông thần tài trên mặt trước sản phẩm Thần Tài
          Phú Quý là biểu tượng gần gũi, mang nhiều ý nghĩa phong
          thủy tốt lành và may mắn. Mặt sau với thiết kế đơn giản
          cùng chữ “Lộc” làm trung tâm, như gói gọn những mong muốn
          và lời chúc sâu sắc cho một cuốc sống phúc lộc an khang,
          bình an đời đời.
        </p>

        <div className='signification__images'>
          <div className='signification__coin  signification__coin--front'>
            <img src={frontCoin} alt="" />
            <div>Mặt trước</div>
          </div>

          <div className='signification__coin'>
            <img src={backCoin} alt="" />
            <div>Mặt sau</div>
          </div>
        </div>
      </section>

      <section className='signification highlights query-area'>
        <h2 className='secondary-header'>Điểm nổi bật của sản phẩm:</h2>
        <ul>
          <li>Sản phẩm được kiểm định bởi VGV LAB Trung tâm
            kiểm định vàng uy tín vàng, bạc, đá quý uy tín hàng đầu.
          </li>
          <li>Tuổi vàng đảm bảo luôn đạt 999.9. </li>
          <li>Thiết kế tinh xảo, đẹp mắt.</li>
          <li> Độ hoàn thiện cao, đảm bảo sắc nét và duy trì độ
            sáng bóng trên sản phẩm.</li>
          <li>Quy cách đóng gói an toàn, hiện đại, đảm bảo  giữ trọn
            giá trị của sản phẩm.</li>
          <li>Dễ dàng lưu trữ và tích trữ.</li>
        </ul>
      </section>

      <section className='store'>
        <img src={shopImg} alt="Cửa hàng" />
        <div>
          <h2><b>Hệ thống cửa hàng:</b></h2>
          <p>* Số 30 Trần Nhân Tông, Quận Hai Bà Trưng, Hà Nội<br />
            Điện thoại liên hệ: (024) 3944 7846</p>
          <p>* Số 329 Cầu Giấy, Quận Cầu Giấy, Hà Nội<br />
            Điện thoại liên hệ: 086 980 9866</p>
          <p>* Văn phòng đại diện TP.HCM: 171-175 Hàm Nghi,
            Phường Nguyễn Thái Bình, Quận 1, TP.HCM<br />
            Điện thoại liên hệ: 84947630880</p>
        </div>
      </section>

      <section className='company-info'>
        <div className='company-info__left-block'>
          <img src={logoImg} alt="Logo Phú Quý" />
          <h3 className='ternery-header'>CÔNG TY CỔ PHẦN ĐẦU TƯ VÀNG PHÚ QUÝ</h3>

          <ul>
            <li>Cửa hàng    : 30 Trần Nhân Tông, Hai Bà Trưng, Hà Nội</li>
            <li>Cửa hàng    : 329 Cầu Giấy, Cầu Giấy, Hà Nội</li>
            <li>VPGD HCM : 175 Hàm Nghi, P.Nguyễn Thái Bình, Q1, TP.HCM</li>
          </ul>
        </div>

        <div className='company-info__right-block'>
          <b className='company-info__hotline'>
            HOTLINE VÀNG: 0243 944 7846<br />
            HOTLINE BẠC: 09 1111 3333
          </b>

          <ul className='company-info__economy'>
            <li>Công ty Cổ phần Đầu tư Vàng Phú Quý</li>
            <li>MST: 0102617088</li>
            <li>Trụ sở chính: Số 30 Trần Nhân Tông, Phường Nguyễn Du, <br />
              Quận Hai Bà Trưng, Thành phố Hà Nội, Việt Nam</li>
          </ul>
        </div>
      </section>

      <footer className='footer'>
        <img src={bctImg} alt='Bộ công thương' />
        © 2023 phuquy.com.vn
      </footer>
    </div>
  );
}

export default App;
