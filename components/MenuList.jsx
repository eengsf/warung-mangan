import Image from "next/image";
// import { data } from "../utils/data";
import { motion } from "framer-motion";

const data = {
  chicken: [
    {
      name: "Ayam Geprek",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 15.000",
      img: "/img/ayam-geprek.png",
    },
    {
      name: "Ayam Geprek Keju",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 17.000",
      img: "/img/ayam-geprek-keju.png",
    },
    {
      name: "Ayam Geprek Mie v1",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 15.000",
      img: "/img/ayam-geprek-mie-hitam.png",
    },
    {
      name: "Ayam Geprek Mie v2",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 15.000",
      img: "/img/ayam-geprek-mie-putih.png",
    },
    {
      name: "Ayam Geprek Spicy",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 17.000",
      img: "/img/ayam-geprek-spicy.png",
    },
    {
      name: "Ayam Rempah",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 13.000",
      img: "/img/ayam-rempah.png",
    },
    {
      name: "Ayam Suwir",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 13.000",
      img: "/img/ayam-suwir.png",
    },
    {
      name: "Ayam Goreng Spesial",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 20.000",
      img: "/img/ayam-goreng-spesial.png",
    },
  ],
  noodle: [
    {
      name: "Mie Goreng Original",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 13.000",
      img: "/img/mie-goreng-original.png",
    },
    {
      name: "Mie Goreng Spicy",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 15.000",
      img: "/img/mie-goreng-spicy.png",
    },
    {
      name: "Mie Goreng Tradisional",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 13.000",
      img: "/img/mie-goreng-tradisional.png",
    },
    {
      name: "Mie Goreng Wijen Daging",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 15.000",
      img: "/img/mie-goreng-wijen-daging.png",
    },
    {
      name: "Mie Goreng Wijen Telur",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 15.000",
      img: "/img/mie-goreng-wijen-telur.png",
    },
    {
      name: "Mie Kuah Original",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 13.000",
      img: "/img/mie-kuah-original.png",
    },
    {
      name: "Mie Kuah Seafood",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 15.000",
      img: "/img/mie-kuah-seafood.png",
    },
    {
      name: "Mie Kuah Spicy",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 15.000",
      img: "/img/mie-kuah-spicy.png",
    },
    {
      name: "Mie Tok",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 8.000",
      img: "/img/mie-tok.png",
    },
  ],
  drink: [
    {
      name: "Ayam Geprek",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 15.000",
      img: "/img/ayam-geprek.png",
    },
    {
      name: "Ayam Geprek Keju",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 17.000",
      img: "/img/ayam-geprek-keju.png",
    },
    {
      name: "Ayam Geprek Mie v1",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 15.000",
      img: "/img/ayam-geprek-mie-hitam.png",
    },
    {
      name: "Ayam Geprek Mie v2",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 15.000",
      img: "/img/ayam-geprek-mie-putih.png",
    },
    {
      name: "Ayam Geprek Spicy",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 17.000",
      img: "/img/ayam-geprek-spicy.png",
    },
    {
      name: "Ayam Rempah",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 13.000",
      img: "/img/ayam-rempah.png",
    },
    {
      name: "Ayam Suwir",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 13.000",
      img: "/img/ayam-suwir.png",
    },
    {
      name: "Ayam Goreng Spesial",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 20.000",
      img: "/img/ayam-goreng-spesial.png",
    },
  ],
  friedFood: [
    {
      name: "Mie Goreng Original",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 13.000",
      img: "/img/mie-goreng-original.png",
    },
    {
      name: "Mie Goreng Spicy",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 15.000",
      img: "/img/mie-goreng-spicy.png",
    },
    {
      name: "Mie Goreng Tradisional",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 13.000",
      img: "/img/mie-goreng-tradisional.png",
    },
    {
      name: "Mie Goreng Wijen Daging",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 15.000",
      img: "/img/mie-goreng-wijen-daging.png",
    },
    {
      name: "Mie Goreng Wijen Telur",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 15.000",
      img: "/img/mie-goreng-wijen-telur.png",
    },
    {
      name: "Mie Kuah Original",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 13.000",
      img: "/img/mie-kuah-original.png",
    },
    {
      name: "Mie Kuah Seafood",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 15.000",
      img: "/img/mie-kuah-seafood.png",
    },
    {
      name: "Mie Kuah Spicy",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 15.000",
      img: "/img/mie-kuah-spicy.png",
    },
    {
      name: "Mie Tok",
      desc: "lorem Ipsum Dolor Sit Amet",
      price: "Rp. 8.000",
      img: "/img/mie-tok.png",
    },
  ],
};

const MenuList = ({ category }) => {
  let categoryData = [];

  // Menentukan kategori yang akan ditampilkan berdasarkan properti category
  if (category === "chicken") {
    categoryData = data.chicken.slice(0, 6); // Ambil 6 data pertama dari array chicken
  } else if (category === "noodle") {
    categoryData = data.noodle.slice(0, 6); // Ambil 6 data pertama dari array drink
  } else if (category === "drink") {
    categoryData = data.drink.slice(0, 6); // Ambil 6 data pertama dari array drink
  } else if (category === "friedFood") {
    categoryData = data.friedFood.slice(0, 6); // Ambil 6 data pertama dari array drink
  }

  return (
    <>
      {categoryData.map((item, index) => (
        <div
          key={index}
          className="flex md:w-1/2 w-full items-center mb-3 md:gap-7 gap-3">
          <div>
            <Image
              src={item.img}
              alt={item.name}
              width={100}
              height={100}
              className="md:w-auto md:h-auto"
            />
          </div>
          <div>
            <h1>{item.name}</h1>
            <p>{item.desc}</p>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuList;
