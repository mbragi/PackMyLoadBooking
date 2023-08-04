import React from "react";
import InputBlock from "styles/InputBlock";

const Input = ({
  id,
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  passwordToggle,
  fullWidth,
  hideLabel = false,
  containerClass,
  errorText,
  width,
  ...rest
}) => {
  return (
    <InputBlock.Container width={width} fullWidth={fullWidth} className={containerClass}>
      <InputBlock.Label htmlFor={name} hide={hideLabel}>
        {label}
      </InputBlock.Label>
      <InputBlock
        name={name}
        fullWidth={fullWidth}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={!!errorText}
        {...rest}
      />
      {errorText && <InputBlock.ErrorText>{errorText}</InputBlock.ErrorText>}
    </InputBlock.Container>
  );
};

export default Input;
