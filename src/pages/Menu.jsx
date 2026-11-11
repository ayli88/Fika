
import { useState } from "react";
import { useMenu } from "../hooks/useMenu";
import FeaturedProducts from "./FeaturedProducts";
function Menu() {
  const { categories, products, loading, error } = useMenu();
  const [activeCategory, setActiveCategory] = useState(null);

  const selectedCategory = activeCategory ?? categories[0]?.id;

  const filteredProducts = products.filter(
    (product) => product.category_id === selectedCategory
  );
const featuredProducts = products.filter(
  (product) => product.is_featured === true
);
  
  if (loading) return <p className="status">در حال دریافت منو...</p>;
  if (error) return <p className="status">خطا: {error}</p>;

  return (
    <main className="menu-page" dir="rtl">
      <header className="menu-header">
        <img
          src="/fika-logo.png"
          alt="Fika Cafe"
          className="logo"
        />
        <p className="brand-slogan">A little pause, a better day.</p>
      </header>
<FeaturedProducts products={featuredProducts} />  
    <section className="menu-section">
        <h1>منوی ما</h1>
        <p className="section-subtitle">
          لحظه‌ای برای خودت، با یک فنجان قهوه
        </p>

        <nav className="categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={
                selectedCategory === category.id
                  ? "category-button active"
                  : "category-button"
              }
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </nav>

        <div className="products">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="product-image"
                />
              ) : (
                <div className="product-placeholder">
                  Fika
                </div>
              )}

              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <strong>
                  {Number(product.price).toLocaleString("fa-IR")} تومان
                </strong>
              </div>
            </article>
          ))}

          {filteredProducts.length === 0 && (
            <p className="empty-message">
              در این دسته‌بندی هنوز محصولی ثبت نشده است.
            </p>
          )};

          
        </div>
        
      </section>

      <footer className="menu-footer">
        <p>FIKA CAFE</p>
        <span>Take a break. Enjoy your moment.</span>
      </footer>
    </main>
  );
}
// console.log("Menu component is running");

export default Menu;
