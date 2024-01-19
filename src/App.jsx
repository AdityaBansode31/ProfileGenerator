// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'
// // import Register from './Components/Register'
// // import About from './Components/About'
// // import { Link } from "react-router-dom";

// import Footer from "./Components/Footer";
import Header from "./Components/Header";
// import Home from "./Components/Home";

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// // import 'swiper/swiper-bundle.css';

// import { useEffect } from 'react';
// import Swiper from 'swiper';
// import SwiperCore, { Navigation, Pagination } from 'swiper/modules';


// SwiperCore.use([Pagination, Navigation]);

// function App() {

//   useEffect(() => {
//     const swiper = new Swiper('.slides-1', {
//       loop: true,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });

//     return () => {
//       swiper.destroy();
//     };
//   }, []);

//   return (
//     // <About />
//     // <Register />
//     <main id="main">
//       <section id="why-us" className="why-us">
//         <div className="container" data-aos="fade-up">
//           <div className="section-header">
//             <h2>Why Choose Us</h2>
//           </div>
//           <div className="row g-0" data-aos="fade-up" data-aos-delay="200">
//             <div
//               className="col-xl-5 img-bg"
//               style={{ backgroundImage: "url('./src/assets/img/why-us-bg.jpg')" }}
//             ></div>
//             <div className="col-xl-7 slides position-relative">
//               <Swiper
//                 spaceBetween={50}
//                 slidesPerView={1}
//                 navigation
//                 pagination={{ clickable: true }}
//                 loop={true}
//               >
//                 <SwiperSlide>
//                   <div className="item">
//                     <h3 className="mb-3">Lets grow your business together</h3>
//                     <h4 className="mb-3">
//                       Optio reiciendis accusantium iusto architecto at quia minima maiores
//                       quidem, dolorum.
//                     </h4>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
//                       ipsam perferendis asperiores explicabo vel tempore velit totam, natus
//                       nesciunt accusantium dicta quod quibusdam ipsum maiores nobis non, eum.
//                       Ullam reiciendis dignissimos laborum aut, magni voluptatem velit
//                       doloribus quas sapiente optio.
//                     </p>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="item">
//                     <h3 className="mb-3">Unde perspiciatis ut repellat dolorem</h3>
//                     <h4 className="mb-3">
//                       Amet cumque nam sed voluptas doloribus iusto. Dolorem eos aliquam quis.
//                     </h4>
//                     <p>
//                       Dolorem quia fuga consectetur voluptatem. Earum consequatur nulla maxime
//                       necessitatibus cum accusamus. Voluptatem dolorem ut numquam dolorum
//                       delectus autem veritatis facilis. Et ea ut repellat ea. Facere est
//                       dolores fugiat dolor.
//                     </p>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="item">
//                     <h3 className="mb-3">Aliquid non alias minus</h3>
//                     <h4 className="mb-3">
//                       Necessitatibus voluptatibus explicabo dolores a vitae voluptatum.
//                     </h4>
//                     <p>
//                       Neque voluptates aut. Soluta aut perspiciatis porro deserunt. Voluptate ut
//                       itaque velit. Aut consectetur voluptatem aspernatur sequi sit laborum.
//                       Voluptas enim dolorum fugiat aut.
//                     </p>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="item">
//                     <h3 className="mb-3">Necessitatibus suscipit non voluptatem quibusdam</h3>
//                     <h4 className="mb-3">
//                       Tempora quos est ut quia adipisci ut voluptas. Deleniti laborum soluta nihil
//                       est. Eum similique neque autem ut.
//                     </h4>
//                     <p>
//                       Ut rerum et autem vel. Et rerum molestiae aut sit vel incidunt sit at
//                       voluptatem. Saepe dolorem et sed voluptate impedit. Ad et qui sint at qui
//                       animi animi rerum.
//                     </p>
//                   </div>
//                 </SwiperSlide>
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>

//   )
// }

// export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Header from './Header';
import Home from './Components/Home';
import About from './Components/About';
import Footer from "./Components/Footer";
import Register from "./Components/Register";
import Login from "./Components/Login";


function App() {


  return (
    // <Home />
    <>
      {/* <Home />
      <Footer /> */}
      
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add other routes */}
        <Route path='/reg' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;


