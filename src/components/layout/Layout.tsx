import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  mainClassName?: string;
}

export function Layout({ children, mainClassName = '' }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-1 ${mainClassName}`}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
