import React from "react";

const Banner = () => {
  // const imgRef = useRef(null);
  // useEffect(() => {
  //   const imgMoveAnimation = document.addEventListener("mousemove", moveText);
  //   return () => imgMoveAnimation;
  // }, []);

  // function moveText(e) {
  //   const position = imgRef.current.getBoundingClientRect();
  //   const x = e.clientX - position.left - position.width / 2;
  //   const y = e.clientY - position.top - position.height / 2;

  //   imgRef.current.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
  // }

  return (
    <section className="overflow-hidden bg-gradient-to-br from-blue-400 to-red-200">
      <div class="relative max-w-6xl mx-auto pt-52">
        <div className="transform translate-y-6 inline-block pt-20 sm:pt-10 font-title sm:tracking-wide uppercase font-extrabold text-gray-100 text-8xl sm:text-9xl">
          <h1>
            Drones <br /> with <br /> personality
          </h1>
        </div>
        <div className="absolute top-28 sm:top-16 sm:right-0 -right-8 max-w-xl lg:max-w-3xl">
          <img
            className="w-full h-full object-cover object-center"
            src="https://i.ibb.co/QQz8PKG/pngfind-com-drone-png-533483.png"
            alt="Feature Drone"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
