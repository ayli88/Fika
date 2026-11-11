
function featuredProducts({ products }) {
  if (products.length === 0) return null;

  return (
    <section className="featured-section" dir="rtl">
      <div className="featured-heading">
        <div>
          <span>FIKA SELECTION</span>
          <h2>پیشنهادهای Fika</h2>
          <p>انتخاب‌های ویژه ما برای لحظه‌های تو</p>
        </div>
      </div>

      <div className="featured-list">
        {products.map((product) => (
          <article className="featured-card" key={product.id}>
            {product.image_url ? (
              <img src={product.image_url} alt={product.name} />
            ) : (
              <div className="featured-placeholder">Fika</div>
            )}

            <div className="featured-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <strong>
                {Number(product.price).toLocaleString("fa-IR")} تومان
              </strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default featuredProducts;
