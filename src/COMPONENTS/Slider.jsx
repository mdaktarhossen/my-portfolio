"use client";
import { Button, Slider } from "keep-react";
import { useState } from "react";

export const SliderComponent = () => {
  const [value, setValue] = useState([]);
  return (
    <Slider min={100} max={1000} defaultValue={[100, 300]} tooltip="top" range={true} onChange={(value) => setValue(value)}>
      {Array.isArray(value) && (
        <Slider.Box>
          <Button size="sm" variant="outline">
            {value[0] ? value[0] : 100}
          </Button>
          <Button size="sm" variant="outline">
            {value[1] ? value[1] : 1000}
          </Button>
        </Slider.Box>
      )}
    </Slider>
  );
};
