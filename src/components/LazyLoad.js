import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Flex } from "@chakra-ui/react";

const MyImage = ({ src, alt = "", caption = "", height = 400 }) => (
  <Flex justify="center" direction="column">
    <LazyLoadImage
      alt={alt || "Somaliland"}
      height={height}
      src={src} //
      effect="blur"
      width={"100%"}
    />
    <span>{caption }</span>
  </Flex>
);

export default MyImage;
