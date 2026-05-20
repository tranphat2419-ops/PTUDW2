import Link from 'next/link';
import s from './footer.module.css';

const PRODUCTS = [
  ['/guitars', 'Guitar điện'],
  ['/bass', 'Bass guitar'],
  ['/pedals', 'Pedal effect'],
  ['/amps', 'Amplifier'],
  ['/accessories', 'Phụ kiện'],
  ['/strings', 'Dây đàn'],
];

const SUPPORT = [
  ['/warranty', 'Chính sách bảo hành'],
  ['/returns', 'Đổi trả hàng'],
  ['/guide', 'Hướng dẫn mua hàng'],
  ['/payment', 'Thanh toán'],
  ['/shipping', 'Vận chuyển'],
  ['/faq', 'FAQ'],
];

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.grid}>
        <div>
          <Link href="/" className={s.logoLink}>
            <img src="/Logo_website.png" alt="Guitar Gen Z" className={s.footerLogo} />
          </Link>
          <p className={s.desc}>
            Shop gear âm nhạc thế hệ mới. Hàng chính hãng, tư vấn bởi nhạc sĩ thực thụ.
          </p>
          <div className={s.socials}>
            <a href="#" className={s.social} aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className={s.social} aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className={s.social} aria-label="TikTok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
            <a href="#" className={s.social} aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
          </div>
        </div>

        <div className={s.col}>
          <p className={s.colTitle}>Sản phẩm</p>
          {PRODUCTS.map(([href, label]) => (
            <Link key={href} href={href} className={s.colLink}>{label}</Link>
          ))}
        </div>

        <div className={s.col}>
          <p className={s.colTitle}>Hỗ trợ</p>
          {SUPPORT.map(([href, label]) => (
            <Link key={href} href={href} className={s.colLink}>{label}</Link>
          ))}
        </div>

        <div className={s.col}>
          <p className={s.colTitle}>Liên hệ</p>
          <div className={s.contactItem}>
            <span className={s.contactLabel}>Hotline</span>
            <a href="tel:0901234567" className={s.contactPhone}>0901 234 567</a>
          </div>
          <div className={s.contactItem}>
            <span className={s.contactLabel}>Email</span>
            <span className={s.contactVal}>tranphat@guitargenz.vn</span>
          </div>
          <div className={s.contactItem}>
            <span className={s.contactLabel}>Địa chỉ</span>
            <span className={s.contactVal}>123 Nguyễn Huệ, Q.1, TP.HCM</span>
          </div>
          <div className={s.contactItem}>
            <span className={s.contactLabel}>Giờ mở cửa</span>
            <span className={s.contactVal}>9:00 – 21:00 mỗi ngày</span>
          </div>
        </div>
      </div>

      <div className={s.bottom}>
        <span>© 2026 Guitar Gen Z. All rights reserved.</span>
        <span>Made for the loud ones 🎸</span>
      </div>
    </footer>
  );
}
