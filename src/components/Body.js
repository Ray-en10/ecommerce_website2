import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Body.css'
import { Link } from 'react-router-dom'


function Body() {

  const { hash } = useLocation();
  useEffect(() => {
    const id = hash.replace('#', '');
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return (
    <div className="body">

      <div className="page" id="page">
        <div className="sec1_img">
          <img
            className="imgpage"
            src="https://i.rtings.com/assets/pages/6S2WXjTl/best-laptop-medium.jpg"
            alt="Main"
          />
        </div>
        <div className="part1">
          <h1 className="title">Little Wolf Tech Shop </h1>
          <p className="undertitle">
            The biggest tech shop in Tunisia
            <br /> where customers come first.
          </p>
        </div>
      </div>
      <section className="sec2">
        <div className="app_prod" id="product">
          <h2>our newest product</h2>
        </div>
        <div>
          <ul className="homegrid">
            <li className="image">
              <a href="/">
                <img
                  src="https://www.tunisianet.com.tn/modules/ps_imagegrid/images/39e45220c4191542660bcb89bb46b8d8868f0302_logitech-g102.jpg"
                  alt=""
                />
              </a>
            </li>
            <li className="image">
              <a href="/">
                <img
                  src="https://www.tunisianet.com.tn/modules/ps_imagegrid/images/58b3d5fbff21523f366cbd0a7f9608876805e0d0_hyperx.jpg"
                  alt=""
                />
              </a>
            </li>
            <li className="image">
              <a href="/">
                <img
                  src="https://www.tunisianet.com.tn/modules/ps_imagegrid/images/22619abc7d1688d19f6ed14793e658866898f734_lenovo-ideapad-3.jpg"
                  alt=""
                />
              </a>
            </li>
            <li className="image">
              <a href="/">
                <img
                  src="https://assets2.razerzone.com/images/pnx.assets/55f9a4b5e26bd8d117046076fb56a1ab/razer-blade-16-1200x630-og.jpg"
                  alt=""
                />
              </a>
            </li>
            <li className="image">
              <a href="/">
                <img
                  src="https://www.geekawhat.com/wp-content/uploads/2022/09/White-Themed-RTX-3060Ti-PC-Build-Featured-Image.jpg"
                  alt=""
                />
              </a>
            </li>
            <li className="image">
              <a href="/">
                <img
                  src="https://cdn.shopify.com/s/files/1/0428/5290/9205/products/cropped2_7cf54ab7-192c-43f0-a081-25cb73150829_1024x1024.jpg?v=1654405597"
                  alt=""
                />
              </a>
            </li>
            <li className="image">
              <a href="/">
                <img
                  src="https://ae01.alicdn.com/kf/H845d5b2c0b2c4a51bb5f94fb9962f925I.jpg"
                  alt=""
                />
              </a>
            </li>
            <li className="image">
              <a href="/">
                <img
                  src="https://img.global.news.samsung.com/be_fr/wp-content/uploads/2021/02/15years-Global-No.1-TV-1.jpg"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="col-md-10">
          <div className="container2">
            <div className="row">
              <div className="col-md-12">
                <h2 className="app_prod2">Today's Promotion</h2>
              </div>
            </div>
            <div className="row">
              <div className="rowpromos">
                <div className="col-md-3">
                  <div className="card">
                    <img
                      src="https://d10mhq06fikmnr.cloudfront.net/catalog/product/thumbnail/814e6cb0e5bb0ed7cb8edd7e54125c56/image/1000x1000/110/80/h/u/hunter_v2_led_wabenfront_main_2.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        GAMING PC : RYZEN 5 3600 - RTX 3050 8G - RAM 8 GO - SSD{" "}
                      </h5>
                      <p className="card-text">
                        GAMING PC : RYZEN 5 3600 - RTX 3050 8G - RAM 8 GO - SSD
                        256 GO{" "}
                        <b>
                          From <br /> 2 190,000 to 2 090,000
                        </b>
                      </p>
                      <Link to="/Product" className="btn2 btn2-primary">
                        See More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                    <img
                      src="https://sbsinformatique.com/8315-large_default/anya-pack-ryzen-5-3600-gtx-1650-oc.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Anya Pack Ryzen 5 3600 - GTX 1650 OC
                      </h5>
                      <p className="card-text">
                        Anya Pack Ryzen 5 3600 - GTX 1650 OC{" "}
                        <b>
                          From <br /> 2 490,000 to 2 290,000
                        </b>
                      </p>
                      <Link to="/Product" className="btn2 btn2-primary">
                        See More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                    <img
                      src="https://sbsinformatique.com/7753-large_default/amd-offer-1-ryzen-5-3600-rtx-3060-dual-12g.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        AMD Offer 1 : Ryzen 5 3600 - RTX 3060
                      </h5>
                      <p className="card-text">
                        AMD Offer 1 : Ryzen 5 3600 - RTX 3060 Dual 12G{" "}
                        <b>
                          From <br /> 2 890,000 to 2 690,000
                        </b>
                      </p>
                      <Link to="/Product" className="btn2 btn2-primary">
                        See More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                    <img
                      src="http://www.mencorner.com/media/produits/Raider_GE76_12UH-097FR_4.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 claclassNamess="card-title">
                        PC PORTABLE MSI GF65THIN 15.6" - I7-10750H{" "}
                      </h5>
                      <p className="card-text">
                        PC PORTABLE MSI GF65THIN 15.6" - I7-10750H - 16Go 512Go
                        SSD - RTX 3060{" "}
                        <b>
                          From <br /> 4 769,000 to 4 659,000
                        </b>
                      </p>
                      <Link to="/Product" className="btn2 btn2-primary">
                        See More
                      </Link>
                      <div/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="spon">
        <h1>Our Sponsors:</h1>
        <div className="sponsor sponsor-1">
          <img
            src="https://raw.githubusercontent.com/r-e-d-ant/Computer-store-website/b90ac65459206fef22e9b87313f587185554263b/assets/images/microsoft.svg"
            alt=""
          />
        </div>
        <div className="sponsor sponsor-2">
          <img
            src="https://raw.githubusercontent.com/r-e-d-ant/Computer-store-website/b90ac65459206fef22e9b87313f587185554263b/assets/images/apple.svg"
            alt=""
          />
        </div>
        <div className="sponsor sponsor-3">
          <img
            src="https://raw.githubusercontent.com/r-e-d-ant/Computer-store-website/b90ac65459206fef22e9b87313f587185554263b/assets/images/dell.svg"
            alt=""
          />
        </div>
        <div className="sponsor sponsor-4">
          <img
            src="https://raw.githubusercontent.com/r-e-d-ant/Computer-store-website/b90ac65459206fef22e9b87313f587185554263b/assets/images/ibm.svg"
            alt=""
          />
        </div>
      </div>

      <Link className='buttop' to="#page">
        <button className="button-name">Back to the top</button>
      </Link>
    </div>
  );
}
export default Body