import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



const Products = {
  "Nike-Air-Force-1-'07-Craft": {
  name: "Nike Air Force 1 '07 Craft",
  img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95e882a6-384c-4638-9055-e45f79672637/air-force-1-07-craft-shoe-jCGMCm.jpg&quot"
  }
  
  , "Nike-Air-VaporMax-Evo": {
  name: "Nike Air VaporMax Evo",
  img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a16929ed-fff6-4f62-9ecb-7df009579f2d/jordan-ma2-shoe-qw1Z6m.jpg&quot"
  }
  , "Jordan-MA2": {
  name: "Jordan MA2",
  img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e5826cb4-e51f-47f4-966c-f2bdb69b5317/zoomx-invincible-run-flyknit-running-shoe-b1XP3r.jpg&quot"
  },
  "Nike-ZoomX-Invincible-Run-Flyknit": {
  name: "Nike ZoomX Invincible Run Flyknit",
  img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/769299dd-b434-47f0-9ead-624614de6329/custom-nike-air-max-95-by-you.jpg&quot"
  },
  "Nike-Air-Max-95-By-You": {
  name: "Nike Air Max 95 By You",
  img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5ff2105e-7469-4d15-ae9e-21c10e2192ef/lebron-7-baseball-blue-shoe-Krq9XR.jpg&quot"
  },
  "LeBron-7-'Baseball-Blue'": {
  name: 'LeBron 7 "Baseball Blue"',
  img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ed0e561b-d52c-4b8d-a195-fb9410b18602/custom-nike-react-live-by-you.jpg&quot"
  },
  "Nike-React-Live-By-You": {
  name: "Nike React Live By You",
  img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6e098e37-f399-40cc-8cbf-82aee9dd8939/d-ms-waffle-shoe-xvRxw7.jpg&quot"
  },
  "Nike-D/MS/X-Waffle": {
  name: "Nike D/MS/X Waffle",
  img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8e488a06-528f-48e5-8368-691009080ad0/custom-nike-air-max-90-premium-by-you.jpg&quot"
  }
  }
  
  // Object.entries(Products).map(([id,{name,img}])=>{
  // console.log(id," ",name)
  // })


function App() {
  const Products = [
{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,
"description":"Your perfect pack for everyday use and walks in the forest. ","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
{"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,
"description":"Slim-fitting style, contrast raglan long sleeve, ","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
{"id":3,"title":"Mens Cotton Jacket","price":55.99,
"description":"great outerwear jackets for Spring/Autumn/Winter, ","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"},
{"id":4,"title":"Mens Casual Slim Fit","price":15.99,
"description":"The color could be slightly different between on the screen and in practice. ","category":"men's clothing","image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"},
{"id":5,"title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,
"description":"From our Legends Collection","category":"jewelery","image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"},
{"id":6,"title":"Solid Gold Petite Micropave ","price":168,
"description":"Satisfaction Guaranteed. Return or exchange any order within 30 days.","category":"jewelery","image":"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"},
{"id":7,"title":"White Gold Plated Princess","price":9.99,
"description":"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...","category":"jewelery","image":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"},
{"id":8,"title":"Pierced Owl Rose Gold Plated Stainless Steel Double","price":10.99,
"description":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel","category":"jewelery","image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"},
{"id":9,"title":"WD 2TB Elements Portable External Hard Drive - USB 3.0 ","price":64,
"description":"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; ","category":"electronics","image":"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"},
{"id":10,"title":"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s","price":109,
"description":"Easy upgrade for faster boot up, shutdown","category":"electronics","image":"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"},
{"id":11,"title":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5","price":109,
"description":"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance"
,"category":"electronics","image":"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"}

  ]
  return (
    <div className="main d-flex justify-content-center align-items-center flex-wrap">
      {Products.map((item)=>(
        <div className="card_display bg-light shadow-sm rounded mr-3 mt-3 d-flex  justify-content-start align-items-center flex-column ">
          <h6 className="catagory mt-1">{item.category}</h6>
          <div><img className=" border shadow-lg Card_img rounded rounded-circle" src={item.image}/></div>
          <div className="w-100% d-flex justify-content-center align-items-center flex-column">
          <p className="Card_p mt-1 d">{item.description}</p>
          <p className="price"><span>Price</span> {item.price}<span>Rs/-</span></p>
          </div>
        </div>
      ))}
    
    </div>
    
  )
}

export default App
