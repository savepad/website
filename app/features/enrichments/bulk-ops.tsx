import React from 'react';
import Image from 'next/image';
import Banner from '@/components/Banner';

const BulkFeature = () => (
  <section id="bulk" className="mb-12 max-w-full">
    <h3>Bulk Operations</h3><br></br>

    <div>
      <Banner
        variant="btw"
        title=""
        message="Currently in development."
      />
    </div>

    <p>There&apos;s times when we just want to do too much at once. Want to add, edit, or delete multiple saves at once? Want to invite a ton of collaborators? Want to batch import or export things? Savepad supports most common batch operations.</p><br></br>
  </section>
);

export default BulkFeature;
