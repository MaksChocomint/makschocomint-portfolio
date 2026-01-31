// app/hooks/useDownloadFile.ts
"use client";

import { useCallback, useState } from "react";

export function useDownloadFile() {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadFile = useCallback(
    async (url: string, fileName: string) => {
      if (isDownloading) return false;

      setIsDownloading(true);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Ошибка загрузки: ${response.status}`);
        }

        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = objectUrl;
        link.download = fileName;
        link.rel = "noopener noreferrer";

        link.click();

        // Очистка памяти
        setTimeout(() => {
          URL.revokeObjectURL(objectUrl);
        }, 100);

        return true;
      } catch (error) {
        console.error("Download error:", error);
        throw error;
      } finally {
        setIsDownloading(false);
      }
    },
    [isDownloading],
  );

  return { downloadFile, isDownloading };
}
