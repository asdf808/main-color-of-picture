import { useState } from "react";
import analyze from "rgbaster";

const imageUrls = [
  "https://fastly.picsum.photos/id/95/800/800.jpg?hmac=Y2N7tLr-ioyunZVnLpKLlOkssOlUzFyeBS7QeLSI-Yw",
  "https://fastly.picsum.photos/id/842/800/800.jpg?hmac=V0Kdv88qg256F311iJNd5xBn5EWJXP7NUACcMILCy9Q",
  "https://fastly.picsum.photos/id/112/800/800.jpg?hmac=4l0okCBC_9gQlVrDok5CskcWmv1JLkZrBj7ai0ook7E",
];

export function App() {
  const [background, setBackground] = useState("#FFF");

  const handleMouseEnter = async (imageUrl: string) => {
    const result = await analyze(imageUrl);
    console.log(result[0].color, result[1].color, result[2].color);
    setBackground(
      `linear-gradient(${result[0].color}, ${result[1].color}, ${result[2].color})`
    );
  };

  const handleMouseLeave = () => {
    setBackground("#FFF");
  };

  return (
    <div
      className="h-full w-full flex items-center justify-center"
      style={{ background }}
    >
      <div className="grid gap-20 grid-cols-3 cursor-pointer">
        {imageUrls.map((imageUrl, index) => {
          return (
            <img
              style={{
                height: "400px",
              }}
              key={index}
              alt="图片"
              src={imageUrl}
              onMouseEnter={(e) => handleMouseEnter(imageUrl)}
              onMouseLeave={handleMouseLeave}
            ></img>
          );
        })}
      </div>
    </div>
  );
}
