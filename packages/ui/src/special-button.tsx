export const SpecialButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mt-8">
      <div className="centerBtn">
        <button className="btn">
          <svg width="180px" height="60px" viewBox="0 0 180 60" className="svgButton">
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
          </svg>
          <span>{children}</span>
        </button>
      </div>
    </div>
  );
};
