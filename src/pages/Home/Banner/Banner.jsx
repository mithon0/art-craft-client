import React from 'react';

const Banner = () => {
    return (
     <><div className="carousel w-full h-[400px]">
     <div id="item1" className="carousel-item w-full relative ">
       <img src="https://i.ibb.co/MNMkbnD/copy-space-wooden-background-paint-brushes.jpg" className="w-full" />
      <div className='absolute top-40 left-[700px] text-white '>
      <h1 className='text-6xl'>ARTCRAFT.EDUCATION</h1>
       <p>
       We provide video tutorials, webinars, online support and mentor's feedback, <br /> all in your native language. Our goal is to equip you with <br /> all the tools you need on your way to becoming a successful artist.
       </p>
      </div>
     </div> 
     <div id="item2" className="carousel-item w-full relative">
       <img src="https://i.ibb.co/Rc17WzH/flat-lay-colorful-aquarelle-with-copy-space.jpg" className="w-full" />
       <div className='absolute top-40 left-10 text-white '>
      <h1 className='text-6xl'>ARTCRAFT.EDUCATION</h1>
       <p>
       We provide video tutorials, webinars, online support and mentor's feedback, <br /> all in your native language. Our goal is to equip you with <br /> all the tools you need on your way to becoming a successful artist.
       </p>
      </div>
     </div> 
     <div id="item3" className="carousel-item w-full relative">
       <img src="https://i.ibb.co/qgQbDgS/top-view-composition-paint-materials.jpg" className="w-full" />
       <div className='absolute top-28 left-[700px] text-white '>
      <h1 className='text-6xl'>Art Craft</h1>
       <p>
       ArtCraft has been bringing creative people's dreams to <br /> life since 2016. We teach digital art, 2D and 3D graphics, <br /> and animation to beginners from square one. Advanced students can upgrade <br /> their skills to further their future careers in the video game industry.
       </p>
      </div>
     </div> 
     <div id="item4" className="carousel-item w-full relative">
       <img src="https://i.ibb.co/phP2dRQ/craft-equipment-blue-origami-paper-fan-beige-background.jpg" className="w-full" />
       <div className='absolute top-20 left-[700px] text-white '>
      <h1 className='text-6xl'>ART & CRAFT CLASSES FOR KIDS & TEENS</h1>
       <p>
       Art & Craft activities are entertaining and at the same time <br /> beneficial to children in many ways. It helps them with decision making <br /> abilities, improves concentration, boosts their self-confidence, <br /> increases their problem-solving abilities and also improve their academic performance.
       </p>
      </div>
     </div>
   </div> 
   <div className="flex justify-center w-full py-2 gap-2">
     <a href="#item1" className="btn btn-xs">1</a> 
     <a href="#item2" className="btn btn-xs">2</a> 
     <a href="#item3" className="btn btn-xs">3</a> 
     <a href="#item4" className="btn btn-xs">4</a>
   </div></>
    );
};

export default Banner;