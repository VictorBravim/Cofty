// Page.tsx
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Cards from '@/components/Cards';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Nav />
      <Hero />
      <Cards />
      <About />
      <Footer />
    </main>
  );
}
