// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {useState} from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { motion, AnimatePresence } from "framer-motion"

const ani = {
    init : {opacity:0, x:1000},
    play : {opacity:1, x:0}
}

export  const Slide = () => {

    const [controlledSwiper, setControlledSwiper] = useState(null);
  return (
    <motion.div initial = 'init'
    animate='play'
    variants={ani}>

    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={4}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    style={{height:600}}
    >
      <SwiperSlide modules={[Controller]} controller={{ control: controlledSwiper }}>Slide 1</SwiperSlide>
      <SwiperSlide modules={[Controller]} onSwiper={setControlledSwiper}>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>

    </motion.div>
    
    
  );
};
export default Slide;