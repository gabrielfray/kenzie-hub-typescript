import { useState } from "react";
import { ContentImage } from "./styles";
import notFound from "../../assets/not-found-page.json";
import Lottie from "react-lottie";

const ContentNotFound = () => {
  const [animateState] = useState({ isStopped: false, isPaused: false });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <ContentImage>
      <Lottie
        options={defaultOptions}
        isStopped={animateState.isStopped}
        isPaused={animateState.isPaused}
      />
    </ContentImage>
  );
};

export default ContentNotFound;
