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
  }),
};

export type IOptionType = {
  value: string;
  label: string;
};

type FieldError = {
  onChange: (event: IOptionType) => void;
};

const SelectEdit = ({ onChange }: FieldError) => {
  const options: IOptionType[] = [
    {
      value: "Iniciante",
      label: "Iniciante",
    },
    { value: "Intermediário", label: "Intermediário" },
    {
      value: "Avançado",
      label: "Avançado",
    },
  ];
  return (
    <>
      <label>Selecionar status</label>
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
export default SelectEdit;
