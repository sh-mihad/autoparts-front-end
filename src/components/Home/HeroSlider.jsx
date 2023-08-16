const HeroSlider = () => {
  return (
    <div className="carousel w-full h-[650px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.insider.com/5b645b72dce2e921008b49c3?width=1136&format=jpeg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://s.aolcdn.com/images/dims?client=fh7w6q744eiognjk&signature=8581a6a449c541c64baa261022fa44f76da1af1f&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fdims-shared%2Fdims3%2FGLOB%2Fcrop%2F1880x1055%2B245%2B356%2Fresize%2F716x402%21%2Fformat%2Fjpg%2Fquality%2F85%2Fhttp%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F4fff385d73675ded14db09e273bd25e9%2F203003521%2F146886688.jpg&thumbnail=716%2C402&quality=100"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/mechanic-under-car-with-spanner.jpg?itok=K6IiphWY"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
