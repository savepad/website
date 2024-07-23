import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const getTransformedImageUrl = (publicId: string, options: object) => {
  return cloudinary.url(publicId, {
    ...options,
    format: 'webp',
    quality: '90',
  });
};

export default cloudinary;
