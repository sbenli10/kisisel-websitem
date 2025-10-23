"use client";
import React from "react";

export default function PDFModal({
  open,
  src,
  onClose,
}: { open: boolean; src: string; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-2xl border border-white/10 w-full max-w-5xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="font-semibold">Sertifika</div>
          <button onClick={onClose} className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15">
            Kapat
          </button>
        </div>
        <div className="h-[75vh]">
          <iframe title="Certificate" src={`${src}#view=fitH&toolbar=1`} className="w-full h-full border-0" />
        </div>
      </div>
    </div>
  );
}
