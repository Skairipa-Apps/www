import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { createPDFDownloader } from "@/lib/pdfUtils";

interface PDFDownloadButtonProps {
  contentId: string;
  filename: string;
  title?: string;
  buttonText?: string;
  className?: string;
  companyName?: string;
  showIcon?: boolean;
}

/**
 * Reusable PDF download button component that can be used across the site
 *
 * @example
 * <PDFDownloadButton
 *   contentId="privacy-policy-content"
 *   filename="Privacy_Policy"
 *   title="Privacy Policy"
 * />
 */
export function PDFDownloadButton({
  contentId,
  filename,
  title,
  buttonText = "Download as PDF",
  className = "",
  companyName = "Skairipa Apps Inc.",
  showIcon = true,
}: PDFDownloadButtonProps) {
  const handlePrintPDF = createPDFDownloader(contentId, {
    filename,
    title,
    companyName,
    includeTimestamp: true,
    includeFooter: true,
  });

  return (
    <Button
      onClick={handlePrintPDF}
      className={`flex items-center gap-2 ${className}`}
    >
      {showIcon && <Download size={16} />}
      {buttonText}
    </Button>
  );
}