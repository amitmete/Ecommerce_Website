import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.ibb.co/b5VkgJx/61jovjd-f9-L-SX3000.jpg "
          alt="Second slide"
        />

        <div className="home__row">
          <Product
            title="Pokémon Assorted Cards, 50 Pieces"
            price={540}
            id="12321341"
            image="https://i.ibb.co/WWxkbqs/61-VJWSzt-Dc-L-AC-UL480-QL65.jpg"
            rating={5}
          />

          <Product
            id="49538094"
            title="NATIONAL GEOGRAPHIC Earth Science Kit - Over 15 Science Experiments & STEM Activities for Kids, Crystal Growing, Erupting Volcanos, 2 Dig Kits & 10 Genuine Specimens, an AMAZON EXCLUSIVE Science Kit"
            price={5000}
            rating={4}
            image="https://i.ibb.co/cD6Q1NC/91-AQBSot-B2-L-AC-UL480-QL65.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S &L Bands Included)"
            price={45780}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />

          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={11250}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={83990}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={79000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="9653481"
            title="Samsung Zflip (256GB, 8GB RAM, 64MP) - Silver(2021)"
            price={125480}
            rating={5}
            image="https://sa.kapamilya.com/absnews/abscbnnews/media/2019/news/02/21/phone2.jpg"
          />
          <Product
            id="9653481"
            title="Beats Solo Pro Wireless Noise Cancelling On-Ear Headphones - Apple H1 Headphone Chip, Class 1 Bluetooth)"
            price={20990}
            rating={5}
            image="https://m.media-amazon.com/images/I/61jzJ3TJRjL._AC_SL1500_.jpg"
          />
          <Product
            id="9653481"
            title="Nike Phantom GT2 Elite FG"
            price={21570}
            rating={5}
            image="https://m.media-amazon.com/images/I/71vZ-VVMCPL._UL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
