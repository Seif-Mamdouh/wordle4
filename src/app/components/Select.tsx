import classnames from "classnames";
import { DetailedHTMLProps, SelectHTMLAttributes } from "react";

//DetailedHTMLProps are basic components

export type SelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

//interface is a way to define a objects in TS
interface Props extends SelectProps {
  options: string[] | number[];
}

export default function Select(props: Props) {
  //fancy for accessing object's function. Called 'Object destructing"
  const { options, className, ...rest } = props;

  return (
    <select className={classnames(className)} {...rest}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

//select has a comprehensive type definition
