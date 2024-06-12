import MainHeader from '@/components/main-header/main-header';
import './globals.css';


export const metadata = {
  title: 'Meals App',
  description: 'Aplikacja dla udostępniania smacznych posiłków.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
