import { useForm, FormProvider } from "react-hook-form";

interface Props {
  children: React.ReactNode;
}

export function AddressFormProvider({ children }: Props) {
  const formMethods = useForm();

  return (
    <FormProvider {...formMethods}>
      {children}
    </FormProvider>
  );
}

AddressFormProvider.displayName = "AddressFormProvider";