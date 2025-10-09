import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();
    const handleResize=()=>{
        generateStars();
    }
    window.addEventListener("resize",handleResize);
    return ()=> window.removeEventListener("resize",handleResize)
  }, []);
  const generateMeteors = () => {
    const numberOfMeteors = 8;
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  };
  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 ">
      {stars.map((star) => (
        <div
          className="star animate-pulse-subtle"
          key={star.id}
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDirection: star.animationDuration + "s",
          }}
        ></div>
      ))}
      {meteors.map((meteor) => (
        <div
          className="meteor opacity-0 animate-meteor"
          key={meteor.id}
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size  + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay +"s" ,
            animationDirection: meteor.animationDuration + "s",
          }}
        ></div>
      ))}
    </div>
  );
};
