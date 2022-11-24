import React from "react";
import { Button } from "@ui-kitten/components";
const AddtaskButton = ({ title, onPress, accessoryLeft, accessoryRight }) => {
  return (
    <Button
      appearance="ghost"
      accessoryLeft={accessoryLeft}
      accessoryRight={accessoryRight}
      onPress={onPress}
      size="giant"
    >
      {title}
    </Button>
  );
};

export default AddtaskButton;
