import {
  type FieldValues,
  type Path,
  type Control,
  Controller,
} from "react-hook-form";
import { Checkbox } from "@mantine/core";
import React from "react";

interface ControlledCheckboxProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  prefixSectionWidth?: number;
  suffixSectionWidth?: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  className?: string;
}

const ControlledCheckbox = <T extends FieldValues>(
  props: ControlledCheckboxProps<T>,
) => {
  return (
    <Controller
      rules={{ required: true }}
      name={props.name}
      control={props.control}
      render={({
        field: { onChange, value, ref },
        fieldState: { invalid, error },
        formState,
      }) => {
        return (
          <>
            <Checkbox
              label={props.label}
              error={error ? error.message : undefined}
              className={props.className}
              disabled={props.disabled}
              placeholder={props.placeholder}
              ref={ref}
              size="sm"
              value={value}
              onChange={onChange}
            />
          </>
        );
      }}
    />
  );
};

export default ControlledCheckbox;
