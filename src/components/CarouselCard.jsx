const CarouselCard = ({ active, children }) => {
  return (
    <div
      className={`min-w-[50%] w-[50%] h-[500px] md:h-[600px] ${active ? "active" : ""}`}
    >
      {children}
    </div>
  );
};

export default CarouselCard;