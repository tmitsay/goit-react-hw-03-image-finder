import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ url, bigImage, onClick }) => {
  return (
    <li className={css.item} onClick={() => onClick(bigImage)}>
      <img className={css.image} src={url} alt="" />
    </li>
  );
};
