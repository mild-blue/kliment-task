import React, { InputHTMLAttributes, ReactNode } from "react";

export function FancyRadioContainer({ children }: { children: React.ReactNode }) {
  return <div className="FancyRadio-container">{children}</div>;
}

export function FancyRadio({
  children,
  name,
  value,
  ...props
}: { children: ReactNode; name: string; value: string } & Partial<InputHTMLAttributes<HTMLInputElement>>) {
  const id = `${name}-${value}`;
  return (
    <div className={`FancyRadio-item ${props.checked ? "FancyRadio-item--selected" : "FancyRadio-item--not-selected"}`}>
      <input type="radio" className="FancyRadio-input" name={name} value={value} {...props} id={id} />
      <label htmlFor={id} className="FancyRadio-label">
        {children}
      </label>
    </div>
  );
}
