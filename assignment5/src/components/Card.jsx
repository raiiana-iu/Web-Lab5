function Card({ children }){
  return(
    <div
      style={{
        border: "1px solid gray",
        padding: "16px",
        margin: "10px",
        borderRadius: "8px"
      }}
    >
      {children}
    </div>
  );
}

export default Card;
