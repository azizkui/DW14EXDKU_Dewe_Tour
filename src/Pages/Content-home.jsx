function Content() {
  return (
    <div>
      <div className="title-position">
        <div className="title-web">
          &nbsp;
          <div className="explore">Explore</div>
          <div className="yact">your amazing city together</div>
        </div>
      </div>
      <div className="parrents-se">
        <div className="parrent-search-engine">
          <div className="text-search">Find great places to holliday</div>
          <div className="action-search-engine">
            <Form.Control type="email" placeholder="Enter Your Destination" />
            <button className="btn-input-text">
              <div className="search-text">Search</div>
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridGap: "1rem",
          justifyItems: "center",
        }}
      >
        {card_contains.map((card) => (
          <div className="box1">
            <img className="logo-position-1" src={card.images} alt="" />
            <div className="text-in-box-1">{card.title}</div>
            <div className="desc-in-box-1">{card.desc}</div>
          </div>
        ))}
      </div>{" "}
      <div className="group-tour">Group Tour </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "1rem",
          justifyItems: "center",
        }}
      >
        {/* Content Group Tour 1*/}
        {destination.map((destinations) => (
          <div className="bg-group-tour-content">
            <div className="img-group-tour-content">
              <img
                src={destinations.images_des}
                width="328px"
                height="241px"
                alt=""
              />
            </div>
            <div className="bg-rating-group-tour-content"></div>
            <div className="rating-group-tour-content">
              {destinations.rating}
            </div>
            <div className="container-text-destination">
              <div className="title-group-tour-content">
                {destinations.title_des}
              </div>
              <div className="flex-price-and-place">
                <p className="price-group-tour-content">
                  {destinations.price}{" "}
                </p>
                <p className="place-group-tour-content">{destinations.place}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Content;
