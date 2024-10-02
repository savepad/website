import React, { useState } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import { FaPlay } from 'react-icons/fa';

interface VideoCardProps {
  imageUrl?: string;
  imageAlt?: string;
  title: string;
  description: string;
  videoUrl: string;
  singleColumn?: boolean;
  imageLeft?: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({ imageUrl, imageAlt, title, description, videoUrl, singleColumn, imageLeft }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className={`rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 p-12 flex ${singleColumn ? 'flex-col md:flex-row' : 'flex-col'} ${singleColumn && imageLeft ? 'md:flex-row-reverse' : ''} min-h-[500px]`}>
        {imageUrl && imageAlt && (
          <div className={`w-full ${singleColumn ? 'md:w-1/2' : ''} flex justify-center relative`}>
            <div className="relative w-full h-full pb-[56.25%]">
              <Image
                src={imageUrl}
                alt={imageAlt}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button onClick={openModal} className="text-white text-6xl">
                  <FaPlay />
                </button>
              </div>
            </div>
          </div>
        )}
        <div className={`flex flex-col justify-center mx-8 ${singleColumn && imageUrl ? 'md:w-1/2 md:pl-6' : 'mt-4'} ${!imageUrl ? 'h-full' : ''}`}>
          <div className="flex flex-col justify-center h-full">
            <h3 className="font-normal mb-4 mt-4">{title}</h3>
            <p className="mb-4">{description}</p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <div className="relative w-full max-w-3xl">
          <iframe
            className="w-full h-[315px]"
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          ></iframe>
          <button onClick={closeModal} className="absolute top-2 right-2 text-white text-2xl">
            &times;
          </button>
        </div>
      </Modal>
    </>
  );
};

export default VideoCard;
