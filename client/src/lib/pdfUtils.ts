/**
 * PDF Utility Library
 * Provides functionality for generating and downloading PDF documents
 * using the browser's built-in print capabilities
 */

/**
 * Generates a printable/downloadable PDF from any content on the page
 *
 * @param options Configuration options for the PDF generation
 * @returns void
 */
export function generatePDF(options: {
  content: string | HTMLElement; // Content to print (element ID or HTML element)
  filename?: string; // Suggested filename for the PDF
  title?: string; // Title for the PDF document
  companyName?: string; // Company name to display in header/footer
  includeTimestamp?: boolean; // Whether to include last updated date
  includeFooter?: boolean; // Whether to include copyright footer
  customCSS?: string; // Any additional CSS styles to apply
}): void {
  // Get the content element
  let contentElement: HTMLElement | null = null;

  if (typeof options.content === "string") {
    contentElement = document.getElementById(options.content);
  } else if (options.content instanceof HTMLElement) {
    contentElement = options.content;
  }

  if (!contentElement) {
    console.error("Content element not found");
    return;
  }

  // Create a new window for the printable content
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("Please allow pop-ups to generate the PDF");
    return;
  }

  // Default values
  const title = options.title || document.title || "Document";
  const filename = options.filename || "document";
  const companyName = options.companyName || "Skairipa Apps Inc.";
  const includeTimestamp = options.includeTimestamp !== false;
  const includeFooter = options.includeFooter !== false;
  const currentYear = new Date().getFullYear();

  // Build the HTML content
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
          }
          h1 {
            text-align: center;
            font-size: 24px;
            margin-bottom: 20px;
          }
          h2 {
            font-size: 20px;
            margin-top: 30px;
            margin-bottom: 15px;
          }
          h3 {
            font-size: 18px;
            margin-top: 25px;
            margin-bottom: 10px;
          }
          p {
            margin-bottom: 15px;
          }
          ul, ol {
            margin-bottom: 15px;
            padding-left: 20px;
          }
          li {
            margin-bottom: 5px;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .company-name {
            font-size: 28px;
            font-weight: bold;
            color: #df00e2;
            margin-bottom: 5px;
          }
          .timestamp {
            font-size: 14px;
            color: #666;
            margin-bottom: 15px;
          }
          .footer {
            margin-top: 50px;
            text-align: center;
            font-size: 14px;
            color: #666;
            border-top: 1px solid #ddd;
            padding-top: 20px;
          }
          @media print {
            @page {
              margin: 1cm;
            }
          }
          ${options.customCSS || ""}
        </style>
      </head>
      <body>
        <div class="header">
          <div class="company-name">${companyName}</div>
          <h1>${title}</h1>
          ${
            includeTimestamp
              ? `<p class="timestamp">Last updated: ${new Date().toLocaleDateString()}</p>`
              : ""
          }
        </div>
        
        ${contentElement.innerHTML}
        
        ${
          includeFooter
            ? `
        <div class="footer">
          © ${currentYear} ${companyName}. All rights reserved.
        </div>
        `
            : ""
        }
      </body>
    </html>
  `);

  // Close the document and initiate printing
  printWindow.document.close();

  // Wait for resources to load then print
  setTimeout(() => {
    printWindow.focus();
    printWindow.print();

    // Close the window after printing (some browsers may do this automatically)
    printWindow.onafterprint = () => {
      printWindow.close();
    };
  }, 1000);
}

/**
 * Creates a PDF download button for any page content
 *
 * @param elementId ID of the element containing content to convert to PDF
 * @param options Additional configuration options
 * @returns The click handler function for easy attachment to buttons
 */
export function createPDFDownloader(
  elementId: string,
  options: {
    filename?: string;
    title?: string;
    companyName?: string;
    includeTimestamp?: boolean;
    includeFooter?: boolean;
    customCSS?: string;
  } = {}
): () => void {
  return () => {
    generatePDF({
      content: elementId,
      ...options,
    });
  };
}
