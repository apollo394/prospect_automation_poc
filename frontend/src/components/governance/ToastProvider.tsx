"use client";
import { createContext, useCallback, useContext, useState } from "react";
type Toast = { id: string; message: string };
let toastSequence = 0;
const ToastContext = createContext<{ toast: (message: string) => void }>({ toast: () => undefined });
export function ToastProvider({ children }: { children: React.ReactNode }) { const [toasts, setToasts] = useState<Toast[]>([]); const toast = useCallback((message: string) => { const id = `${Date.now()}-${toastSequence++}`; setToasts(value => [...value, { id, message }]); window.setTimeout(() => setToasts(value => value.filter(item => item.id !== id)), 3600); }, []); return <ToastContext.Provider value={{ toast }}>{children}<div className="fixed bottom-4 right-4 z-50 space-y-2" aria-live="polite" aria-atomic="true">{toasts.map(item => <div key={item.id} role="status" className="rounded-sc-sm bg-sc-night px-4 py-3 text-sm text-white shadow-lg">{item.message}</div>)}</div></ToastContext.Provider>; }
export const useToast = () => useContext(ToastContext);
