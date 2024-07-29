import React from 'react';
import Image from 'next/image';

const EnrichmentFeature = () => (
  <section id="enrichment" className="mb-12 max-w-full">
    <h3>Auto-enrichments</h3><br></br>

    <Image src="https://savepad.app/wp-content/uploads/Live-Preview.png" alt="Save feature" width={1024} height={578} layout="responsive" /><br></br>

    <p>Browse your saves without leaving Savepad. Whenever possible, Savepad enriches all saves with further metadata and context, making things easy to find. Savepad’s in-app previews also let you read articles, view videos, and explore uploaded saves without leaving the app.</p><br></br>

    <p>Remember the last filters you applied when looking for landing pages? Yeah, just reference it within Savepad rather than adding another tab to the 500 you probably have open right now.</p><br></br>
  </section>
);

export default EnrichmentFeature;
