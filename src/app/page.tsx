"use client"
import Image from "next/image";

import jsPDF from "jspdf";

export default function Home() {

const customWidth = 100
const customHeight = 100

function generatePDF() {
  let doc = new jsPDF({

    unit: 'mm',
    format: [customWidth, customHeight], 

  });

  let pdfBackground = './documents/test.jpg';
  doc.addImage(pdfBackground, 'PDF', 0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height);
  doc.text("Hello world!",0,10);

  doc.output("dataurlnewwindow");

}

  return (
    <div>

      <button onClick={generatePDF} className="p-3 rounded-md bg-lime-950 text-white">pdf</button>

    </div>
  );
}
