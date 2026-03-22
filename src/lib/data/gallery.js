export const GALLERY_TYPES = {
  PHOTO: 'photo',
  DIGITAL_ART: 'digital_art'
};

export const GALLERY_TAGS = {
  PHOTOGRAPH: 'photograph',
  DIGITAL_ART: 'digital_art',
  PIXEL_ART: 'pixel_art',
  LANDSCAPE: 'landscape',
  PORTRAIT: 'portrait',
  ABSTRACT: 'abstract'
};

export const GALLERY_ITEMS = {
  sample_photo_1: {
    id: 'sample_photo_1',
    title: 'Sample Landscape',
    type: GALLERY_TYPES.PHOTO,
    tags: [GALLERY_TAGS.PHOTOGRAPH, GALLERY_TAGS.LANDSCAPE],
    description: 'A beautiful landscape photograph.',
    image_url: null,
    instagram_url: null
  },
  sample_digital_1: {
    id: 'sample_digital_1',
    title: 'Digital Creation',
    type: GALLERY_TYPES.DIGITAL_ART,
    tags: [GALLERY_TAGS.DIGITAL_ART, GALLERY_TAGS.ABSTRACT],
    description: 'An abstract digital artwork.',
    image_url: null,
    instagram_url: null
  },
  sample_pixel_1: {
    id: 'sample_pixel_1',
    title: 'Pixel Art Piece',
    type: GALLERY_TYPES.DIGITAL_ART,
    tags: [GALLERY_TAGS.PIXEL_ART],
    description: 'A retro-style pixel art creation.',
    image_url: null,
    instagram_url: null
  }
};

export const getGalleryItemById = (id) => GALLERY_ITEMS[id] || null;
export const getAllGalleryItems = () => Object.values(GALLERY_ITEMS);
export const getGalleryItemsByType = (type) =>
  Object.values(GALLERY_ITEMS).filter(item => item.type === type);
export const getGalleryItemsByTag = (tag) =>
  Object.values(GALLERY_ITEMS).filter(item => item.tags.includes(tag));
