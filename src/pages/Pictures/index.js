import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTER_CONFIG } from '../../constaint/router.constaint';
import { dataPictures } from './mockData';
import ModalViewImage from '../../components/ModalViewImage';
import './pictures.scss';

function Pictures() {
  const navigate = useNavigate();
  const [viewDetailImageUrl, setViewDetailImageUrl] = useState('');
  const imgRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const isWidthHigherHeight =
    window.innerWidth / window.innerHeight -
      dimensions.width / dimensions.height <
    0;
  console.log('🚀 ~ Pictures ~ compareWidthHeight:', isWidthHigherHeight);

  useEffect(() => {
    const handleImageLoad = () => {
      if (imgRef.current) {
        const originalWidth = imgRef.current.naturalWidth;
        const originalHeight = imgRef.current.naturalHeight;

        setDimensions({ width: originalWidth, height: originalHeight });
      }
    };
    const imgElement = imgRef.current;
    if (imgElement) {
      imgElement.addEventListener('load', handleImageLoad);
    }

    return () => {
      if (imgElement) {
        imgElement.removeEventListener('load', handleImageLoad);
      }
    };
  }, [viewDetailImageUrl]);

  const renderPictures = (pictures) => {
    return pictures.map((picture) => {
      return (
        <div
          className='pictures-data-item'
          key={'pictures' + picture.id}
          onClick={() => setViewDetailImageUrl(picture.url)}
        >
          <img src={picture.url} alt='error' />
          <div className='description'>{picture.title}</div>
        </div>
      );
    });
  };

  const renderSub2Categories = (sub2Categories) => {
    return sub2Categories.map((sub2Category) => {
      return (
        <div
          className='pictures-sub2-category-item'
          key={'sub2' + sub2Category.id}
        >
          <div className='label'>{sub2Category.title}</div>
          <div className='pictures-data-container'>
            {renderPictures(sub2Category.pictures)}
          </div>
        </div>
      );
    });
  };

  const renderSubCategories = (subCategories) => {
    return subCategories.map((subCategory) => {
      return (
        <div
          className='pictures-sub-category-container'
          key={'sub' + subCategory.id}
        >
          <div className='label'>{subCategory.title}</div>
          <div className='pictures-sub2-category-container'>
            {renderSub2Categories(subCategory.sub2Categories)}
          </div>
        </div>
      );
    });
  };

  const renderCategory = () => {
    return dataPictures.categories.map((category) => {
      return (
        <div className='pictures-category-item' key={'cat' + category.id}>
          <div className='label'>{category.title}</div>
          <div className='pictures-sub-category'>
            {renderSubCategories(category.subCategories)}
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className='pictures-container'>
        <div className='pictures-category-container'>{renderCategory()}</div>
        <button
          onClick={() => navigate(ROUTER_CONFIG.Home)}
          className='pictures-button'
        >
          Trở lại
        </button>
      </div>

      {Boolean(viewDetailImageUrl) && (
        <ModalViewImage
          onClose={() => setViewDetailImageUrl('')}
          className='modal-view-detail'
        >
          <div className={'detail-picture-container'}>
            <img
              className={`detail-picture ${
                !isWidthHigherHeight ? 'height-full' : 'width-full'
              }`}
              src={viewDetailImageUrl}
              alt='error'
              ref={imgRef}
            />
          </div>
        </ModalViewImage>
      )}
    </>
  );
}

export default Pictures;
