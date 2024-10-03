import React from 'react';
import Image from 'next/image';
import Banner from '@/components/Banner';

const DocumentsFeature = () => (
  <section id="documents" className="mb-12 max-w-full">
    <h3>Files & Documents</h3><br></br>

    <div>
      <Banner
        variant="btw"
        title=""
        message="Auto-enrichments under development."
      />
    </div>

    <p>Savepad comes with support for uploading common formats like .docx, .pdf, and .txt. When uploading files, Savepad scrapes the content of the file to let you search parts of a document when looking for something specific, rather than having to remember the filename or your manually added notes.</p><br></br>
  </section>
);

export default DocumentsFeature;
