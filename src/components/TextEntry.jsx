import React from "react";
import { Input } from "@ui-kitten/components";

const TextEntry = ({
  status,
  placeholder,
  multiline,
  style,
  className,
  label,
  textStyle,
  caption,
  accessoryLeft,
  accessoryRight,
  onChangeText,
  value
}) => {
  return (
    <Input
      style={style}
      className={className}
      placeholder={placeholder}
      multiline={multiline}
      label={label}
      value={value}
      caption={caption}
      accessoryLeft={accessoryLeft}
      accessoryRight={accessoryRight}
      textStyle={textStyle}
      status={status}
      onChangeText={onChangeText}
    />
  );
};

export default TextEntry;
