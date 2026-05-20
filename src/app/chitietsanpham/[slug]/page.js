'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './chitietsanpham.module.css';
import Slider from './slider/slider';

const PRODUCT = {
  id: 'squier-classic-vibe-strat',
  brand: 'Fender CS',
  name: "Fender Custom Shop '57 Stratocaster Chicago Special NOS",
  emoji: '🎸',
  image: '/fender-57-strat.webp',
  tag: 'Best Seller',
  inStock: true,
  stockQty: 8,
  price: '119.000.000₫',
  priceRaw: 119000000,
  oldPrice: '135.000.000₫',
  discountPct: '-12%',
  savedAmount: 'Tiết kiệm 16.000.000₫',
  rating: 4.8,
  reviewCount: 142,
  colors: [
    { name: 'Sunburst', hex: '#C4813A' },
    { name: 'Olympic White', hex: '#F0EDE4' },
    { name: 'Lake Placid Blue', hex: '#5E8FAA' },
    { name: 'Fiesta Red', hex: '#C84B3C' },
  ],
  quickSpecs: [
    { key: 'Body', val: 'Alder' },
    { key: 'Neck', val: 'Maple, C-Shape' },
    { key: 'Fretboard', val: 'Indian Laurel, 9.5"' },
    { key: 'Frets', val: '21 Medium Jumbo' },
    { key: 'Pickups', val: 'SSS — Vintage-Style Single-Coil' },
    { key: 'Bridge', val: '6-Saddle Vintage-Style Synchronized' },
  ],
  fullSpecs: {
    'Thân đàn': [
      { key: 'Body Material', val: 'Alder' },
      { key: 'Body Finish', val: 'Gloss Polyester' },
      { key: 'Body Shape', val: 'Stratocaster®' },
    ],
    'Cần đàn': [
      { key: 'Neck Material', val: 'Maple' },
      { key: 'Neck Profile', val: "'C' Shape" },
      { key: 'Scale Length', val: '25.5" (648 mm)' },
      { key: 'Fingerboard Radius', val: '9.5" (241 mm)' },
    ],
    'Điện tử': [
      { key: 'Pickups', val: '3x Vintage-Style Single-Coil' },
      { key: 'Controls', val: 'Master Volume, Tone 1, Tone 2' },
      { key: 'Switching', val: '5-Position Blade' },
    ],
    'Phần cứng': [
      { key: 'Bridge', val: '6-Saddle Vintage-Style Synchronized Tremolo' },
      { key: 'Tuners', val: 'Vintage-Style with Pearloid Buttons' },
      { key: 'Nut', val: 'Synthetic Bone, 1.650" (42 mm)' },
    ],
  },
  description: `
    Squier Classic Vibe Stratocaster là cây đàn lý tưởng cho những ai muốn có âm thanh Fender chính hãng 
    với mức giá hợp lý. Được chế tác tỉ mỉ với thân đàn Alder và cần đàn Maple theo phong cách 
    vintage những năm '50-'60, mỗi chi tiết đều phản ánh DNA của dòng Stratocaster huyền thoại.

    Ba pickup Single-Coil Vintage-Style cho ra âm thanh trong trẻo, đầy chiều sâu — từ clean bell-tone 
    tinh tế đến crunch sắc bén khi kết hợp với overdrive. Switch 5 chiều cho phép khai thác đa dạng 
    tone màu từ classic rock đến blues, funk và pop.

    Dù bạn mới bắt đầu hay đã có kinh nghiệm, Classic Vibe Strat là nền tảng âm nhạc đáng tin cậy 
    để phát triển phong cách chơi của riêng mình.
  `,
  highlights: [
    'Thân đàn Alder cho âm thanh cân bằng, đầy đặn',
    'Cần Maple "C-Shape" thoải mái, phù hợp mọi cỡ tay',
    'Pickup SSS vintage cho tone sáng, clear và musical',
    'Switch 5 chiều — đa dạng tone từ 1 cây đàn',
    'Cầu tremolo 6 saddle — vibrato mượt mà, chuẩn pitch',
    'Chốt dây pearloid button — thẩm mỹ vintage, giữ tune tốt',
  ],
  reviews: [
    {
      name: 'Minh Tuấn',
      tag: 'Đã mua',
      rating: 5,
      date: '12/04/2025',
      text: 'Chất lượng vượt xa mức giá. Frets cực mượt, action setup sẵn rất ổn, pickup cho ra tone rất vintage. Ship nhanh, đóng gói cẩn thận. Highly recommend!',
    },
    {
      name: 'Khánh Linh',
      tag: 'Đã mua',
      rating: 5,
      date: '28/03/2025',
      text: 'Mình là beginner mua cây này theo lời khuyên của anh nhân viên tư vấn. Cầm lên chơi rất thoải mái, âm thanh đẹp hơn mình nghĩ nhiều. Màu Sunburst nhìn cực xịn ngoài thực tế.',
    },
    {
      name: 'Hoàng Phúc',
      tag: 'Đã mua',
      rating: 4,
      date: '05/03/2025',
      text: 'Đàn build quality tốt, setup cũng ổn. Chỉ cần chỉnh lại action một chút là perfect. Tone pickup middle + neck sound rất musical khi chơi clean.',
    },
  ],
  ratingBars: [
    { star: 5, pct: 78, count: 111 },
    { star: 4, pct: 14, count: 20 },
    { star: 3, pct: 5, count: 7 },
    { star: 2, pct: 2, count: 3 },
    { star: 1, pct: 1, count: 1 },
  ],
};

const RELATED = [
  { brand: 'Gibson', name: 'Original ES-335 Figured', emoji: '🎸', image: '/gibson-es335.webp', price: '98.900.000₫', href: '#' },
  { brand: 'Duesenberg', name: 'Starplayer TV Custom', emoji: '🎸', image: '/duesenberg-starplayer.webp', price: '64.990.000₫', href: '#' },
  { brand: 'Gibson', name: 'J-180 Everly Brothers', emoji: '🎸', image: '/gibson-everly-j180.webp', price: '145.000.000₫', href: '#' },
  { brand: 'Fender CS', name: '1966 Telecaster Deluxe', emoji: '🎸', image: '/fender-66-tele.webp', price: '112.500.000₫', href: '#' },
];

const TABS = ['Mô tả', 'Thông số kỹ thuật', 'Đánh giá (142)'];

// ── Helpers ───────────────────────────────────────────────────────────────────
function StarRow({ rating, size = '0.85rem' }) {
  return (
    <span className={styles.stars} style={{ fontSize: size }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= Math.round(rating) ? styles.starFilled : styles.starEmpty}>
          {s <= Math.round(rating) ? '★' : '☆'}
        </span>
      ))}
    </span>
  );
}

// ── Page Component ────────────────────────────────────────────────────────────
export default function ChiTietSanPham({ params }) {
  const [activeTab, setActiveTab] = useState(0);
  const [qty, setQty] = useState(1);
  const [activeColor, setActiveColor] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    const saved = localStorage.getItem('cartCount');
    const current = saved ? parseInt(saved, 10) : 2;
    const nextCount = current + qty;
    localStorage.setItem('cartCount', nextCount.toString());
    window.dispatchEvent(new Event('cart-updated'));

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <main className={styles.wrapper}>
      {/* ─── BREADCRUMB ─── */}
      <div className={styles.breadcrumb}>
        <div className={styles.breadcrumbInner}>
          <Link href="/" className={styles.breadcrumbLink}>Trang chủ</Link>
          <span className={styles.breadcrumbSep}>{"//"}</span>
          <Link href="/guitars" className={styles.breadcrumbLink}>Guitar điện</Link>
          <span className={styles.breadcrumbSep}>{"//"}</span>
          <Link href="/guitars/fender" className={styles.breadcrumbLink}>Fender</Link>
          <span className={styles.breadcrumbSep}>{"//"}</span>
          <span className={styles.breadcrumbCurrent}>Squier Classic Vibe Strat</span>
        </div>
      </div>

      {/* ─── MAIN PRODUCT SECTION ─── */}
      <div className={styles.productPage}>
        {/* LEFT: Gallery Slider */}
        <Slider 
          images={[
            { emoji: '🎸', image: '/fender-57-strat.webp' },
            { emoji: '🎸', image: '/fender-66-tele.webp' },
            { emoji: '🎸', image: '/fender-jimmy-page.webp' },
            { emoji: '🎸', image: '/duesenberg-starplayer.webp' }
          ]} 
          name={PRODUCT.name}
          discountPct={PRODUCT.discountPct}
          tag="★ Best Seller"
        />

        {/* RIGHT: Info */}
        <div className={styles.productInfoWrap}>
          {/* Meta */}
          <div className={styles.productMeta}>
            <span className={styles.brandBadge}>{PRODUCT.brand}</span>
            <span className={styles.stockBadge}>
              <span className={styles.stockDot} />
              Còn hàng ({PRODUCT.stockQty} chiếc)
            </span>
          </div>

          <h1 className={styles.productName}>{PRODUCT.name}</h1>

          {/* Rating */}
          <div className={styles.ratingRow}>
            <StarRow rating={PRODUCT.rating} />
            <span className={styles.ratingNum}>{PRODUCT.rating}</span>
            <span className={styles.ratingCount}>({PRODUCT.reviewCount} đánh giá)</span>
          </div>

          {/* Price */}
          <div className={styles.priceBlock}>
            <span className={styles.priceMain}>{PRODUCT.price}</span>
            <div className={styles.priceRow}>
              <span className={styles.priceOld}>{PRODUCT.oldPrice}</span>
              <span className={styles.priceSave}>{PRODUCT.savedAmount}</span>
            </div>
          </div>

          {/* Quick specs */}
          <div className={styles.specsTable}>
            <div className={styles.specsTitle}>{"// Thông số nhanh"}</div>
            {PRODUCT.quickSpecs.map((s) => (
              <div key={s.key} className={styles.specRow}>
                <div className={styles.specKey}>{s.key}</div>
                <div className={styles.specVal}>{s.val}</div>
              </div>
            ))}
          </div>

          {/* Color selector */}
          <div className={styles.selectorBlock}>
            <div className={styles.selectorLabel}>
              Màu sắc — <span>{PRODUCT.colors[activeColor].name}</span>
            </div>
            <div className={styles.colorOptions}>
              {PRODUCT.colors.map((c, i) => (
                <div
                  key={c.name}
                  className={`${styles.colorSwatch} ${activeColor === i ? styles.colorSwatchActive : ''}`}
                  style={{ background: c.hex }}
                  title={c.name}
                  onClick={() => setActiveColor(i)}
                />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className={styles.quantityBlock}>
            <div className={styles.selectorLabel}>Số lượng</div>
            <div className={styles.quantityControl}>
              <button
                className={styles.qtyBtn}
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <input
                type="number"
                className={styles.qtyNum}
                value={qty}
                min={1}
                onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
                readOnly
              />
              <button
                className={styles.qtyBtn}
                onClick={() => setQty((q) => q + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaRow}>
            <button className={styles.btnBuy}>
              Mua ngay →
            </button>
            <button className={styles.btnCart} onClick={handleAddToCart}>
              {addedToCart ? '✓ Đã thêm!' : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 01-8 0" />
                  </svg>
                  Thêm vào giỏ
                </>
              )}
            </button>
          </div>

          <button className={styles.btnWishlist}>
            ♡ Lưu vào sản phẩm yêu thích
          </button>

          {/* Trust badges */}
          <div className={styles.trustRow}>
            {[
              { icon: '⚡', text: 'Giao nhanh\n24h nội thành' },
              { icon: '🔧', text: 'Bảo hành\n12 tháng' },
              { icon: '↩', text: 'Đổi trả\n7 ngày miễn phí' },
            ].map((t) => (
              <div key={t.icon} className={styles.trustItem}>
                <span className={styles.trustIcon}>{t.icon}</span>
                <span className={styles.trustText}>{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── TAB SECTION ─── */}
      <div className={styles.tabSection}>
        <div className={styles.tabsInner}>
          <div className={styles.tabNav}>
            {TABS.map((tab, i) => (
              <button
                key={tab}
                className={`${styles.tabBtn} ${activeTab === i ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab(i)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className={styles.tabContent}>
            {/* TAB 0: Mô tả */}
            {activeTab === 0 && (
              <div className={styles.descBlock}>
                <div className={styles.descText}>
                  {PRODUCT.description.trim().split('\n\n').map((para, i) => (
                    <p key={i}>{para.trim()}</p>
                  ))}
                </div>
                <div className={styles.descHighlights}>
                  <div className={styles.descHighlightsTitle}>ĐIỂM NỔI BẬT</div>
                  {PRODUCT.highlights.map((h) => (
                    <div key={h} className={styles.highlightItem}>
                      <span className={styles.highlightDot} />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 1: Thông số kỹ thuật */}
            {activeTab === 1 && (
              <div className={styles.fullSpecsGrid}>
                {Object.entries(PRODUCT.fullSpecs).map(([groupName, rows]) => (
                  <div key={groupName} className={styles.specGroup}>
                    <div className={styles.specGroupTitle}>{groupName}</div>
                    {rows.map((r) => (
                      <div key={r.key} className={styles.specGroupRow}>
                        <div className={styles.specGroupKey}>{r.key}</div>
                        <div className={styles.specGroupVal}>{r.val}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* TAB 2: Đánh giá */}
            {activeTab === 2 && (
              <div className={styles.reviewsLayout}>
                {/* Rating overview */}
                <div className={styles.ratingOverview}>
                  <span className={styles.bigRating}>{PRODUCT.rating}</span>
                  <div className={styles.bigStars}>
                    <StarRow rating={PRODUCT.rating} size="1.2rem" />
                  </div>
                  <span className={styles.totalReviews}>{PRODUCT.reviewCount} đánh giá toàn quốc</span>

                  {PRODUCT.ratingBars.map((b) => (
                    <div key={b.star} className={styles.ratingBar}>
                      <span className={styles.ratingBarLabel}>{b.star}★</span>
                      <div className={styles.ratingBarTrack}>
                        <div className={styles.ratingBarFill} style={{ width: `${b.pct}%` }} />
                      </div>
                      <span className={styles.ratingBarCount}>{b.count}</span>
                    </div>
                  ))}
                </div>

                {/* Review list */}
                <div className={styles.reviewList}>
                  {PRODUCT.reviews.map((r) => (
                    <div key={r.name} className={styles.reviewCard}>
                      <div className={styles.reviewHeader}>
                        <div>
                          <div className={styles.reviewerName}>{r.name}</div>
                          <span className={styles.reviewerTag}>{r.tag}</span>
                        </div>
                        <div className={styles.reviewDate}>
                          <div className={styles.reviewStars}>
                            {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
                          </div>
                          {r.date}
                        </div>
                      </div>
                      <p className={styles.reviewText}>{r.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ─── RELATED PRODUCTS ─── */}
      <section className={styles.relatedSection}>
        <div className={styles.relatedInner}>
          <div className={styles.relatedHead}>
            <div>
              <div className="section-tag-label">Có thể bạn thích</div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>RELATED GEAR</h2>
            </div>
            <Link href="/products" className="btn-outline">Xem tất cả →</Link>
          </div>

          <div className={styles.relatedGrid}>
            {RELATED.map((p) => (
              <Link key={p.name} href={p.href} className={styles.relatedCard}>
                <div className={styles.relatedImgBox}>
                  <span className={styles.relatedEmojiFallback}>{p.emoji}</span>
                  {p.image && (
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className={styles.relatedImg}
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  )}
                </div>
                <div className={styles.relatedInfo}>
                  <div className={styles.relatedBrand}>{p.brand}</div>
                  <div className={styles.relatedName}>{p.name}</div>
                  <div className={styles.relatedPrice}>{p.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
