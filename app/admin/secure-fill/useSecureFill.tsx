import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

export type FormState = {
  fullName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  zipCode: string;

  ssn: string;
  idmeUsername: string;
  idmePassword: string;

  dlFront: File | null;
  dlBack: File | null;

  W2SSl: File | null;

  fatherFirst: string;
  fatherLast: string;

  mothersMaiden: string;
  mothersFirst: string;
  mothersLast: string;

  stateOfBirth: string;
  cityOfBirth: string;
};

export const initialFormState: FormState = {
  fullName: "",
  email: "",
  address: "",
  city: "",
  state: "",
  phone: "",
  zipCode: "",

  ssn: "",
  idmeUsername: "",
  idmePassword: "",

  fatherFirst: "",
  fatherLast: "",
  mothersFirst: "",
  mothersLast: "",
  mothersMaiden: "",
  stateOfBirth: "",
  cityOfBirth: "",
  dlFront: null,
  dlBack: null,
  W2SSl: null,
};
export type UseSecureFillReturn = {
  form: FormState;
  setForm: Dispatch<SetStateAction<FormState>>;
  setErrors: Dispatch<SetStateAction<Record<string, string>>>;
  errors: Record<string, string>;
  submitting: boolean;
  message: string | null;
  setMessage: Dispatch<SetStateAction<string | null>>;
  validate: () => boolean;
  setSubmitting: Dispatch<SetStateAction<boolean>>;
};

export function useSecureFill() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  function validate() {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.fatherFirst.trim())
      e.fatherFirst = "Father's First Name is required";
    if (!form.fatherLast.trim())
      e.fatherLast = "Father's Last Name is required";
    if (!form.mothersMaiden.trim())
      e.mothersMaiden = "Mothers's Maiden Name is required";
    if (!form.mothersFirst.trim())
      e.mothersFirst = "Mother's Last Name is required";
    if (!form.mothersLast.trim())
      e.mothersLast = "Mother's Last name is required";
    if (!form.address.trim()) e.address = "Address is required";
    if (!form.stateOfBirth.trim())
      e.stateOfBirth = "State of Birth is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.cityOfBirth.trim()) e.cityOfBirth = "City of Birth is required";
    if (!form.state.trim()) e.state = "State is required";
    if (!form.zipCode.trim()) e.zipCode = "zipCode is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required";
    if (form.phone.replace(/\D/g, "").length < 10)
      e.phone = "Valid phone number required";
    if (!form.ssn.trim()) e.ssn = "SSN is required";
    if (!form.idmeUsername.trim()) e.idmeUsername = "idmeUsername is required";
    if (!form.idmePassword.trim()) e.idmePassword = "idmePassword is required";
    if (!form.dlFront) e.dlFront = "Front of driver’s license required";
    if (!form.dlBack) e.dlBack = "Back of driver’s license required";
    if (!form.W2SSl) e.W2SSl = "one of W-2 or SSI is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  return {
    form,
    setForm,
    setErrors,
    errors,
    submitting,
    message,
    setMessage,
    validate,
    setSubmitting,
  };
}
