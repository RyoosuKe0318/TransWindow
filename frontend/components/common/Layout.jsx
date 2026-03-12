import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, gColor = "#f5f5f5" }) {
  return (
    <>
      <Header />
      <div className="pt-16 mx-36">
        <main
          className="min-h-screen p-8"
          style={{ backgroundColor: gColor }}
        >
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
