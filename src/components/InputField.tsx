import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

type InputProps = {
  name: string;
  placeholder: string;
  type?: string;
  register: UseFormRegister<any>;
  validationRules: object;
  error?: FieldError;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>)=> void;
};

const InputField: React.FC<InputProps> = ({ name, onChange, placeholder, type = "text", register, validationRules, error }) => {
  return (
    <div className="flex w-full flex-col mb-4">
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full flex rounded-[0.3rem] px-3 text-sm py-[0.7rem] bg-zinc-100 outline-blue-600 focus:ring-red-500
           ${error ? "border border-red-600 outline-red-600 focus:ring-red-500" : ""}`}
        {...register(name, validationRules)}
        onChange={(e)=> {register(name).onChange(e);
          if (onChange) onChange(e);
        }}
      />
      {error && <p className="text-xs text-red-600 py-1 px-3  text-left">{error.message}</p>}
    </div>
  );
};

export default InputField;
