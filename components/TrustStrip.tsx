export function TrustStrip() {
  return (
    <section aria-label="Company credentials" className="trust-bar border-y">
      <div className="slp-grid">
        <ul className="col-span-12 grid md:grid-cols-3">
          {["USMC veteran owned", "Family operated", "Fully managed"].map((item) => (
            <li
              key={item}
              className="trust trust-item border-b border-hairline-dark py-4 text-center text-[12px] last:border-b-0 md:border-b-0 md:border-r md:py-5 md:last:border-r-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
