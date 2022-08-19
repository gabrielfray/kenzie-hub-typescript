import React from "react";
import Select, { StylesConfig } from "react-select";

const colourStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "var(--color-gray-2)",
    color: "var(--color-gray-1)",
    height: "3rem",
    cursor: "pointer",
    boxShadow: "transparent",
    borderColor: "none",
  }),
  option: (styles, { isFocused }) => {
    return {
      ...styles,
      backgroundColor: isFocused
        ? "var(--color-gray-3)"
        : "var(--color-gray-2)",
      color: "var(--color-gray-1)",
      cursor: "pointer",

      ":active": {
        ...styles[":active"],
        backgroundColor: "var(--color-gray-2)",
      },
    };
  },
  input: (styles) => ({ ...styles, color: "var(--color-gray-1)" }),
  singleValue: (styles) => ({ ...styles, color: "var(--color-gray-1)" }),
  indicatorSeparator: (styles) => {
    return { ...styles, width: "none" };
  },
  menu: (styles) => ({
    ...styles,
    backgroundColor: "var(--color-gray-2)",
    overFlowY: "auto",
    height: "130px",
  }),
};

type IOptionType = {
  value: string;
  label: string;
};

type FieldError = {
  onChange: (event: IOptionType) => void;
};

const Selection = ({ onChange }: FieldError) => {
  const options: IOptionType[] = [
    {
      value: "Primeiro módulo (Introdução ao Frontend)",
      label: "Primeiro Módulo",
    },
    { value: "Segundo módulo (Frontend Avançado)", label: "Segundo Módulo" },
    {
      value: "Terceiro módulo (Introdução ao Backend)",
      label: "Terceiro Módulo",
    },
    { value: "Quarto módulo (Backend Avançado)", label: "Quarto Módulo" },
  ];
  return (
    <>
      <label>Selecionar módulo</label>
      <Select
        menuPlacement="auto"
        options={options}
        styles={colourStyles}
        className="Selection"
        onChange={(event) => onChange(event as IOptionType)}
      />
    </>
  );
};
export default Selection;
