import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const StyledSlider = styled(Slider)`
  .slick-list {

  }
`;



export const Sticks = React.forwardRef<Slider>(
  ({ ...props }, ref) => {

    return <StyledSlider
      {...props}
      ref={ref}></StyledSlider>
  })
