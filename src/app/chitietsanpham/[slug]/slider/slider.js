'use client';

import { useState } from 'react';
import styles from './slider.module.css';

export default function Slider({ images = [], name = '', discountPct = '', tag = '' }) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className={styles.emptyGallery}>
        <span>Không có hình ảnh</span>
      </div>
    );
  }

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentItem = images[activeIdx];

  return (
    <div className={styles.sliderContainer}>
      {/* Main Image Slider View */}
      <div className={styles.mainView}>
        {tag && <span className={styles.tagLabel}>{tag}</span>}
        {discountPct && <span className={styles.discountLabel}>{discountPct}</span>}

        {/* Fallback emoji */}
        <span className={styles.emojiFallback}>{currentItem.emoji}</span>

        {/* Image content */}
        {currentItem.image && (
          <img
            src={currentItem.image}
            alt={`${name} - ${activeIdx + 1}`}
            className={styles.mainImage}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        )}

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={handlePrev} aria-label="Previous image">
              ‹
            </button>
            <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={handleNext} aria-label="Next image">
              ›
            </button>
          </>
        )}
      </div>

      {/* Thumbnails row */}
      {images.length > 1 && (
        <div className={styles.thumbnailRow}>
          {images.map((item, idx) => (
            <div
              key={idx}
              className={`${styles.thumbnail} ${activeIdx === idx ? styles.thumbnailActive : ''}`}
              onClick={() => setActiveIdx(idx)}
            >
              <span className={styles.thumbEmoji}>{item.emoji}</span>
              {item.image && (
                <img
                  src={item.image}
                  alt={`${name} thumbnail ${idx + 1}`}
                  className={styles.thumbImg}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
