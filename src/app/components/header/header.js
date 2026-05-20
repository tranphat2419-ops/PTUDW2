'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import s from './header.module.css';

const NAV = [
  { href: '/guitars',     label: 'Guitars' },
  { href: '/pedals',      label: 'Pedals' },
  { href: '/amps',        label: 'Amps' },
  { href: '/accessories', label: 'Phụ kiện' },
  { href: '/sale',        label: 'Sale' },
];

const TICKER = [
  'Free ship nội thành từ 500K',
  'Bảo hành 12 tháng',
  'Đổi trả 7 ngày',
  'Tư vấn miễn phí',
];

export default function Header() {
  const [cartCount, setCartCount] = useState(2);
  const items = [...TICKER, ...TICKER, ...TICKER];

  useEffect(() => {
    // Read initial cart count from localStorage (or initialize with 2)
    const saved = localStorage.getItem('cartCount');
    if (saved === null) {
      localStorage.setItem('cartCount', '2');
    } else {
      const parsed = parseInt(saved, 10);
      if (parsed !== 2) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCartCount(parsed);
      }
    }

    const handleCartUpdate = () => {
      const current = localStorage.getItem('cartCount');
      if (current !== null) {
        setCartCount(parseInt(current, 10));
      }
    };

    window.addEventListener('cart-updated', handleCartUpdate);
    return () => {
      window.removeEventListener('cart-updated', handleCartUpdate);
    };
  }, []);

  return (
    <>
      <header className={s.header}>
        <div className={s.inner}>
          <Link href="/" className={s.logo}>
            <img src="/Logo_website.png" alt="Guitar Gen Z" className={s.logoImg} />
          </Link>
          <nav className={s.nav}>
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={s.link}>{n.label}</Link>
            ))}
          </nav>
          <button className={s.cart}>
            Cart <span className={s.badge}>{cartCount}</span>
          </button>
        </div>
      </header>
 
      <div className={s.ticker}>
        <div className={s.track}>
          {items.map((t, i) => <span key={i} className={s.item}>{t} <span>{"//"}</span></span>)}
        </div>
      </div>
    </>
  );
}
