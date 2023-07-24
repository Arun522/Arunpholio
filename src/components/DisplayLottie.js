import React, { Suspense } from "react";
import LottiePlayer from "react-lottie-player";

const DisplayLottie = ({ animationData }) => {
  return (
    <div>
      <Suspense fallback={null}>
        <LottiePlayer
          loop
          autoplay
          animationData={animationData}
          style={{ width: 300, height: 300 }}
        />
      </Suspense>
    </div>
  );
};

export default DisplayLottie;
