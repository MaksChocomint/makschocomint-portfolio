// app/components/ResumeButton.tsx
"use client";

import { useDownloadFile } from "@/hooks/useDownloadFile";

export function ResumeButton() {
  const { downloadFile, isDownloading } = useDownloadFile();

  const handleDownload = async () => {
    try {
      await downloadFile("/files/resume.docx", "Иванов_Максим_Резюме.docx");
    } catch (error) {
      console.error(
        `Не удалось скачать резюме. Пожалуйста, попробуйте позже. ${error}`,
      );
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`cursor-pointer px-4 sm:px-6 py-2 sm:py-2 bg-garden-moss text-garden-dark hover:bg-garden-cream hover:-translate-y-1 transition-all shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)] sm:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] text-sm sm:text-base ${
        isDownloading ? "opacity-75 cursor-not-allowed" : ""
      }`}
    >
      РЕЗЮМЕ
    </button>
  );
}
