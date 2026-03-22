export function ResumeButton() {
  const { downloadFile, isDownloading } = useDownloadFile();

  const handleDownload = async () => {
    try {
      await downloadFile("/files/resume.pdf", "Иванов_Максим_Резюме.pdf");
    } catch (error) {
      console.error(
        `Не удалось скачать резюме. Пожалуйста, попробуйте позже. ${error}`,
      );
    }
  };

  return (
    <a
      href="/files/resume.pdf"
      download="maksim-ivanov-resume.pdf"
      aria-label="Скачать резюме в PDF"
      className="cursor-pointer px-4 sm:px-6 py-2 sm:py-2 bg-garden-moss text-garden-dark hover:bg-garden-cream hover:-translate-y-1 transition-all shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)] sm:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] text-sm sm:text-base inline-flex items-center justify-center"
    >
      РЕЗЮМЕ
    </a>
  );
}
