/* eslint-disable @next/next/no-img-element */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
  return (
    <div className="relative">
      {/* Div gradient below for the Banner bottom*/}
      <div
        className="
         absolute w-full h-32 bg-gradient-to-t
       from-gray-200 to-transparent -bottom-1 z-20"
      />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
        <video
            className="lg:my-[-70px]"
            src="/media/primevideo.mp4"
            autoPlay
            loop
            muted
            
          />
        </div>

        <div>
        <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
          
        </div>

        <div>
        <video
            className="lg:my-[-170px]"
            src="/media/video3.mp4"
            autoPlay
            loop
            muted
          />
        </div>

        <div>
          <img className="lg:my-[-200px]" loading="lazy" src="/media/music4.jpg" alt="" />
        </div>

        
      </Carousel>
    </div>
  );
};

export default Banner;
