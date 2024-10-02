import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import { FaPlay } from 'react-icons/fa';

interface ShadowVideoCardProps {
  imageUrl?: string;
  imageAlt?: string;
  title: string;
  description: string;
  videoUrl: string;
  singleColumn?: boolean;
  imageLeft?: boolean;
}

const ShadowVideoCard: React.FC<ShadowVideoCardProps> = ({ imageUrl, imageAlt, title, description, videoUrl, singleColumn, imageLeft }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const appElement = document.getElementById('__next');
      if (appElement) {
        Modal.setAppElement(appElement);
      }
      setIsMounted(true);
    }
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className={`relative rounded-lg bg-zinc-950 p-12 flex ${singleColumn ? 'flex-col md:flex-row' : 'flex-col'} ${singleColumn && imageLeft ? 'md:flex-row-reverse' : ''} min-h-[500px]`}>
        {imageUrl && imageAlt && (
          <div className={`w-full ${singleColumn ? 'md:w-1/2' : ''} flex justify-center relative`}>
            <div className=" border-violet-950 rounded-lg border relative w-full h-full pb-[56.25%]">
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
            <h4 className="font-normal mb-4 mt-4">{title}</h4>
            <p className="mb-4">{description}</p>
          </div>
        </div>
      </div>
      {isMounted && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Video Modal"
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75"
        >
          <div className="relative w-full max-w-3xl">
            <iframe
              className="w-full h-[35vh]"
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
      )}
    </>
  );
};

export default ShadowVideoCard;
