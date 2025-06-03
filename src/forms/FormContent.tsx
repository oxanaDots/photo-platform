import React, {createContext, useContext, useState, ReactNode} from 'react';

export type FormData = {
    email: string;
    firstName: string;
    lastName: string,
    streetNumber: string,
    streetName: string,
    businessname: string;

    postcode: string,
    phonenumber: string,
  

}

type FormContextType = {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  };

  // create context and set its initial value to undefined to see if the context is being used outside of its provider
  const FormContext  = createContext<FormContextType | undefined>(undefined);

  type FormProviderProps = {
    children: ReactNode;
  };



  export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
    const [formData, setFormData] = useState<FormData>({ 

    email: "",
    firstName: "",
    lastName:"",
    businessname: "",
    streetNumber: "",
    streetName: "",
   
    postcode: "",
    phonenumber: "",
 
     });
  
    return (
      <FormContext.Provider value={{ formData, setFormData }}>
        {children}
      </FormContext.Provider>
    );
  };

  export const useFormContext = (): FormContextType => {
    const context = useContext(FormContext);
  
    if (!context) {
      throw new Error("useFormContext must be used within a FormProvider");
    }
  
    return context;
  };