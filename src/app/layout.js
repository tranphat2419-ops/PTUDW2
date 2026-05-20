import './globals.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';

export const metadata = {
  title: 'Guitar Gen Z — Shop Gear Âm Nhạc Thế Hệ Mới',
  description:
    'Guitar điện, pedal effect, amp và phụ kiện — hàng chính hãng, giá tốt, ship nhanh. Est. 2026, HCM City.',
  icons: {
    icon: '/Logo_website.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
