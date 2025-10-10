"use client";

// import { DropdownListType } from "@/components/atoms/dropdownList/dropdownList";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useForm = <T extends Record<string, any>>(initialData: T) => {
  const [formData, setFormData] = useState<T>(initialData);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const updateForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//   const updateDropForm = (option: DropdownListType, name: string) => {
//     setFormData({ ...formData, [name]: option.value });
//   };

  const updateImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateField = (field: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const updateCheckbox = (id: string, value: boolean) => {
    setFormData({ ...formData, [id]: value });
  };

  const updateRadio = (id: string, value: boolean | string, key?: string) => {
    setFormData({ ...formData, [key || "selectedOption"]: id });
  };

  const updateToggle = (name: string, value: boolean) => {
    setFormData({ ...formData, [name]: value });
  };

  return {
    formData,
    updateForm,
    // updateDropForm,
    setFormData,
    selectedImage,
    updateImage,
    updateField,
    updateCheckbox,
    updateRadio,
    updateToggle,
  };
};
