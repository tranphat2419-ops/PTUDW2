'use client';

import { useState } from 'react';
import Link from 'next/link';
import s from './page.module.css';

const HERO_SLIDES = [
  {
    image: '/hero1.webp',
    title: 'Introducing: Lavender Haze',
    desc: 'Meet our latest CME Exclusives: Lavender Haze—a Player II collection that looks like a lost custom color from Fender\'s golden era and sounds bigger, warmer, and more powerful than ever.',
    btnText: 'SHOP NOW',
    link: '/chitietsanpham/squier-classic-vibe-strat',
  },
  {
    image: '/hero2.webp',
    title: 'Gibson Custom Shop',
    desc: 'Discover the ultimate craftsmanship, premium woods, and vintage tone specs from Gibson\'s legendary custom facility.',
    btnText: 'SHOP NOW',
    link: '/chitietsanpham/squier-classic-vibe-strat',
  },
  {
    image: '/hero3.webp',
    title: 'Duesenberg Starplayer TV',
    desc: 'German design meets semi-hollow perfection. Unleash new soundscapes with Duesenberg\'s premium instruments.',
    btnText: 'SHOP NOW',
    link: '/chitietsanpham/squier-classic-vibe-strat',
  },
];

const STATS = [
  { num: '500+', label: 'Sản phẩm' },
  { num: '12K+', label: 'Khách hàng' },
  { num: '4.9★', label: 'Đánh giá' },
];

const CATEGORIES = [
  { icon: '🎸', name: 'Guitar điện', count: '120+', href: '/guitars' },
  { icon: '🎛️', name: 'Pedal effect', count: '85+',  href: '/pedals' },
  { icon: '📻', name: 'Amplifier',    count: '40+',  href: '/amps' },
  { icon: '🎵', name: 'Phụ kiện',     count: '200+', href: '/accessories' },
];

const PRODUCTS = [
  {
    slug: 'squier-classic-vibe-strat',
    brand: 'Fender CS', name: "Fender CS '57 Stratocaster Chicago Special",
    emoji: '🎸', tag: 'Best Seller',
    image: '/fender-57-strat.webp',
    specs: ['Handwound pickups', 'Maple neck', 'Candy Apple Red'],
    price: '119.000.000₫', oldPrice: '135.000.000₫',
  },
  {
    slug: 'gibson-original-es-335',
    brand: 'Gibson', name: 'Gibson Original ES-335 Figured',
    emoji: '🎸', tag: 'Classic',
    image: '/gibson-es335.webp',
    specs: ['AAA Maple top', 'T-Type pickups', 'Antique Natural'],
    price: '98.900.000₫', oldPrice: null,
  },
  {
    slug: 'duesenberg-starplayer-tv',
    brand: 'Duesenberg', name: 'Duesenberg Starplayer TV Custom',
    emoji: '🎸', tag: 'Hot Item',
    image: '/duesenberg-starplayer.webp',
    specs: ['Semi-hollow body', 'GrandVintage HB', 'Hanover Gold'],
    price: '64.990.000₫', oldPrice: '72.000.000₫',
  },
  {
    slug: 'gibson-everly-brothers-j180',
    brand: 'Gibson', name: 'Gibson Custom Everly Brothers J-180',
    emoji: '🎸', tag: 'New Drop',
    image: '/gibson-everly-ebony.webp',
    specs: ['Sitka Spruce top', 'Everly double guards', 'Cherry Gloss'],
    price: '145.000.000₫', oldPrice: null,
  },
  {
    slug: 'fender-cs-1966-telecaster',
    brand: 'Fender CS', name: 'Fender CS 1966 Telecaster Deluxe',
    emoji: '🎸', tag: 'Vintage',
    image: '/fender-66-tele.webp',
    specs: ['3-Tone Sunburst', 'Maple board', 'Closet Classic'],
    price: '112.500.000₫', oldPrice: '125.000.000₫',
  },
  {
    slug: 'fender-cs-jimmy-page-tele',
    brand: 'Fender CS', name: 'Fender CS Jimmy Page Signature Telecaster',
    emoji: '🎸', tag: 'Signature',
    image: '/fender-jimmy-page.webp',
    specs: ['White Blonde', 'Ash body', 'Journeyman Relic'],
    price: '138.000.000₫', oldPrice: null,
  },
  {
    slug: 'duesenberg-starplayer-tv-gold',
    brand: 'Duesenberg', name: 'Duesenberg Starplayer TV Gold',
    emoji: '🎸', tag: 'Special',
    image: '/duesenberg-starplayer.webp',
    specs: ['Hanover Gold', 'P90 + HB Pickups', 'German Build'],
    price: '64.990.000₫', oldPrice: null,
  },
  {
    slug: 'gibson-original-es-335-natural',
    brand: 'Gibson', name: 'Gibson Original ES-335 Natural Figured',
    emoji: '🎸', tag: 'Hollowbody',
    image: '/gibson-es335.webp',
    specs: ['Antique Natural', 'Rosewood fretboard', 'Classic 57s'],
    price: '98.900.000₫', oldPrice: '105.000.000₫',
  },
];

const WHY = [
  { icon: '⚡', title: 'Giao nhanh 24h',      desc: 'Nội thành HCM & Hà Nội giao nhanh trong ngày, miễn phí cho đơn hàng từ 500K.' },
  { icon: '🔧', title: 'Bảo hành 12 tháng',   desc: 'Hỗ trợ kỹ thuật, căn chỉnh tận nơi miễn phí — không phát sinh chi phí phụ.' },
  { icon: '💯', title: 'Hàng chính hãng',      desc: 'Nhập khẩu trực tiếp đầy đủ CO/CQ, tem chính hãng, 1 đổi 1 trong 7 ngày.' },
  { icon: '🎵', title: 'Tư vấn chuyên sâu',    desc: 'Đội ngũ kỹ thuật và nhạc sĩ tư vấn setup pedalboard/rig âm thanh phù hợp.' },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [addedItems, setAddedItems] = useState({});

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const handleAddToCart = (product) => {
    const saved = localStorage.getItem('cartCount');
    const current = saved ? parseInt(saved, 10) : 2;
    const nextCount = current + 1;
    localStorage.setItem('cartCount', nextCount.toString());
    window.dispatchEvent(new Event('cart-updated'));

    setAddedItems((prev) => ({ ...prev, [product.slug]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.slug]: false }));
    }, 1500);
  };

  return (
    <main className={s.wrapper}>
      {/* HERO SECTION */}
      <section 
        className={s.hero} 
        style={{ backgroundImage: `url(${HERO_SLIDES[currentSlide].image})` }}
      >
        <div className={s.heroOverlay} />
        
        <div className={s.heroContent}>
          <h1 className={s.heroTitle}>{HERO_SLIDES[currentSlide].title}</h1>
          <p className={s.heroDesc}>{HERO_SLIDES[currentSlide].desc}</p>
          <Link href={HERO_SLIDES[currentSlide].link} className={s.heroBtn}>
            {HERO_SLIDES[currentSlide].btnText}
          </Link>
        </div>

        {/* Navigation arrows */}
        <button 
          className={`${s.slideNavBtn} ${s.prevSlideBtn}`} 
          onClick={handlePrevSlide} 
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button 
          className={`${s.slideNavBtn} ${s.nextSlideBtn}`} 
          onClick={handleNextSlide} 
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Navigation dots */}
        <div className={s.slideDots}>
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              className={`${s.slideDot} ${currentSlide === idx ? s.slideDotActive : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className={s.section}>
        <div className={s.sectionHead}>
          <div>
            <p className="section-tag-label">Danh mục sản phẩm</p>
            <h2 className="section-title">Shop by Gear</h2>
          </div>
        </div>
        <div className={s.catGrid}>
          {CATEGORIES.map((c) => (
            <Link key={c.href} href={c.href} className={s.catCard}>
              <span className={s.catIcon}>{c.icon}</span>
              <span className={s.catName}>{c.name}</span>
              <span className={s.catCount}>{c.count} items</span>
              <span className={s.catArrow}>→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* PRODUCTS FEATURED */}
      <section className={s.products}>
        <div className={s.productsInner}>
          <div className={s.sectionHead}>
            <div>
              <p className="section-tag-label">Sản phẩm nổi bật</p>
              <h2 className="section-title">Featured Gear</h2>
            </div>
            <Link href="/products" className="btn-outline">Xem tất cả →</Link>
          </div>
          <div className={s.productGrid}>
            {PRODUCTS.map((p) => (
              <div key={p.slug} className={s.productCard}>
                <div className={s.productImgBox}>
                  <span className={s.productEmojiFallback}>{p.emoji}</span>
                  {p.image && (
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className={s.productImg}
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  )}
                  <span className={s.productTag}>{p.tag}</span>
                </div>
                <div className={s.productInfo}>
                  <p className={s.productBrand}>{p.brand}</p>
                  <p className={s.productName}>{p.name}</p>
                  <div className={s.productSpecs}>
                    {p.specs.map((sp) => <span key={sp} className={s.productSpec}>{sp}</span>)}
                  </div>
                  <div className={s.productFoot}>
                    <div>
                      <span className={s.productPrice}>{p.price}</span>
                      {p.oldPrice && <span className={s.productOld}>{p.oldPrice}</span>}
                    </div>
                    <button 
                      onClick={() => handleAddToCart(p)} 
                      className={`${s.productAddBtn} ${addedItems[p.slug] ? s.productAddBtnSuccess : ''}`}
                      aria-label="Thêm vào giỏ hàng"
                    >
                      {addedItems[p.slug] ? '✓' : '+'}
                    </button>
                  </div>
                  <Link href={`/chitietsanpham/${p.slug}`} className={s.productBuyBtn}>
                    Mua ngay →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER WITH COUNTDOWN */}
      <section className={s.banner}>
        <div className={s.bannerInner}>
          <div className={s.bannerContent}>
            <p className={s.bannerLabel}>Ưu đãi giới hạn tháng này</p>
            <h2 className={s.bannerTitle}>
              Build Your <span>Dream Rig</span>
            </h2>
            <p className={s.bannerDesc}>
              Combo trọn gói Guitar + Amplifier + 2 Pedal Effect — tiết kiệm trực tiếp đến 25% tổng hóa đơn. Số lượng giới hạn chỉ còn 15 suất.
            </p>
            <Link href="/combo" className={s.bannerBtn}>
              Xây dựng cấu hình ngay
            </Link>
          </div>
          <div className={s.countdownWrapper}>
            <div className={s.countdownGlow} />
            <div className={s.countdown}>
              {[['08','Ngày'],['14','Giờ'],['32','Phút']].map(([n, l]) => (
                <div key={l} className={s.countItem}>
                  <span className={s.countNum}>{n}</span>
                  <span className={s.countLabel}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className={s.whySection}>
        <div className={s.why}>
          {WHY.map((w) => (
            <div key={w.title} className={s.whyCard}>
              <span className={s.whyIcon}>{w.icon}</span>
              <p className={s.whyTitle}>{w.title}</p>
              <p className={s.whyDesc}>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
