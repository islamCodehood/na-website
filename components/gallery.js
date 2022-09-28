import GalleryItem from "./galleryItem";

const files = [
  {
    title: 'Bedroom in Dubai',
    source:
      '/assets/images/2.jpg',
  },
  {
    title: 'Bedroom in Dubai',
    source:
      '/assets/images/3.jpg',
  },
  {
    title: 'Bedroom in Dubai',
    source:
      '/assets/images/2-1.jpg',
  },
  {
    title: 'Bedroom in Dubai',
    source:
      '/assets/images/5.jpg',
  },
  {
    title: 'Bedroom in Dubai',
    source:
      '/assets/images/4.jpg',
  },
  {
    title: 'Bedroom in Dubai',
    source:
      '/assets/images/6.jpg',
  },
]

const Gallery = () => {
  return (
    <ul role="list" className="my-24 px-5 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {files.map((file) => (
        <GalleryItem key={file.source} file={file} />
      ))}
    </ul>
  )
}

export default Gallery;