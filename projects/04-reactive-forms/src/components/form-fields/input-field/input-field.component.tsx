import "./input-field.component.css"
import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";

interface Props<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  placeholder?: string;
  type?: string;
  error?: FieldError;
}

export const InputField = <T extends FieldValues>(
  { label, name, control, placeholder, type, error }: Props<T>) => {
  return (
    <div className="form-group">
      <label htmlFor={String(name)}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={name}
            placeholder={placeholder ?? ''}
            type={type ?? 'text'}
            {...field}
            className={`form-control ${error ? "is-invalid" : ""}`}
          />
        )}
      />
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};
