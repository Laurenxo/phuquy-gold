import './App.css';
import headerImg from "./images/header.svg";
import goldPlateImg from "./images/gold-plate.svg";
import priceBg from "./images/price-bg.svg";

function App() {
  return (
    <div className="App">
      <header>
        <img src={headerImg} alt='Phu Quy Header' className='header__image' />
      </header>

      <h1 className='primary-header header-text'>
        Thần tài Phú Quý<br />
        1 lượng vàng 999.9
      </h1>

      <img src={goldPlateImg} alt="Vàng thần tài Phú Quý" className='gold-plate' />

      <section className='query-area'>
        <p className='query-time padding-20'>
          Tra cứu vào lúc: 19/05/2023 16:00
        </p>

        <div className='query-area__price'>
          <div className='query-area__price-btn'>
            <img src={priceBg} alt="" />
            <div>GIÁ MUA VÀO</div>
            <b>54.000.000đ</b>
          </div>

          <div className='query-area__price-btn'>
            <img src={priceBg} alt="" />

            <div>GIÁ BÁN RA</div>
            <b>55.000.000đ</b>
          </div>
        </div>

        <div className='padding-20'>
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
        </div>
      </section>

      <section className='property'>
        TÍCH TRỮ AN TOÀN VÀ <br />ĐƯỢC BẢO CHỨNG BỞI PHÚ QUÝ
      </section>
    </div>
  );
}

export default App;
