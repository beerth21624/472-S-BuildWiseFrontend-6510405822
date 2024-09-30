import {
  type FieldValues,
  type Path,
  type Control,
  Controller,
} from "react-hook-form";
import { Textarea } from "@mantine/core";
import React from "react";

interface ControlledInputTextareaProps<T extends FieldValues> {
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
}

const ControlledInputTextarea = <T extends FieldValues>(
  props: ControlledInputTextareaProps<T>,
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
            <Textarea
              withAsterisk={props.required}
              label={props.label}
              error={error ? error.message : undefined}
              leftSectionWidth={props.prefixSectionWidth}
              rightSectionWidth={props.suffixSectionWidth}
              rightSection={
                props.suffix && (
                  <div className="w-fit whitespace-nowrap">{props.suffix}</div>
                )
              }
              leftSection={
                props.prefix && (
                  <div className="whitespace-nowrap">{props.prefix}</div>
                )
              }
              className="w-full"
              disabled={props.disabled}
              placeholder={props.placeholder}
              onWheel={(e) => e.currentTarget.blur()}
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

export default ControlledInputTextarea;
