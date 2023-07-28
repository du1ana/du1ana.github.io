import React from "react";

const useProgressiveImg = (lowQualitySrc, highQualitySrc) => {
  const [src, setSrc] = React.useState(lowQualitySrc);
  React.useEffect(() => {
      setSrc(lowQualitySrc);
      const img = new Image();
      img.src = highQualitySrc;
      img.onload = () => {
          setSrc(highQualitySrc);
      };
  }, [lowQualitySrc, highQualitySrc]);
  return [src, { blur: src === lowQualitySrc }];
};

export default function ImageLoader(props) {
  console.log(props);
  const [src, { blur }] = useProgressiveImg(props.placeholderSrc, props.src);
  return (
    <div style={{overflow: 'hidden'}}>
          <img
      className = {props.imgClass}
      height={props.height}
      src={src}
      style={{
        filter: blur ? "blur(10px)" : "none",
        transition: blur ? "none" : "filter 0.3s ease-out",
      }}
      alt={props.alt}
    /> </div>

  );
};