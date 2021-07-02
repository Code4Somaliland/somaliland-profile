import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Flex } from "@chakra-ui/react";

const MyImage = ({
  src,
  alt = "",
  caption = "",
  height = 400,
  width = "100%",
}) => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  return (
    <Flex justify="center" direction="column">
      <LazyLoadImage
        alt={alt || "Somaliland"}
        height={isMobile ? "100%" : height}
        src={src} //
        effect="blur"
        width={isMobile ? "100%" : width}
      />
      <span>{caption}</span>
    </Flex>
  );
};

export default MyImage;
