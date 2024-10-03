import React from 'react';
import Image from 'next/image';
import Banner from '@/components/Banner';

const AudioFeature = () => (
  <section id="audio" className="mb-12 max-w-full">
    <h3>Audio</h3><br></br>

    <div>
      <Banner
        variant="btw"
        title=""
        message="Auto-enrichments under development."
      />
    </div>

    <p>Upload audio files without hassles to Savepad to search for later. Savepad recognizes common audio formats like .mp3 and .wav. Depending on the format, the content, and the file, Savepad may auto-enrich the file to transcribe the content, making each snippet searchable vis Savepad&apos;s full-text search.</p><br></br>

  </section>
);

export default AudioFeature;
