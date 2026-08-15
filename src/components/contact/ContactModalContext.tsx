"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import ContactModal from "@/components/contact/ContactModal";

type ContactModalContextValue = {
  isOpen: boolean;
  openModal: (service?: string) => void;
  closeModal: () => void;
  presetService: string | null;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [presetService, setPresetService] = useState<string | null>(null);

  const openModal = useCallback((service?: string) => {
    setPresetService(service ?? null);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ isOpen, openModal, closeModal, presetService }),
    [isOpen, openModal, closeModal, presetService]
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModal />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }
  return ctx;
}
