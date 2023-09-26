import React from 'react'

const Carousel = () => {
    return (
        <>
        <div className='container'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/slide1.jpeg" className="d-block w-100" alt="..." />
                        <div id='carousel-caption' className="carousel-caption d-none d-md-block">
                            <h3>Welcome</h3>
                            <p>India's Best Shopping Store</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/slide2.jpeg" className="d-block w-100" alt="..." />
                        <div id='carousel-caption' className="carousel-caption d-none d-md-block">
                        <h3>Welcome</h3>
                            <p>India's Best Shopping Store</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/slide3.jpg" className="d-block w-100" alt="..." />
                        <div id='carousel-caption' className="carousel-caption d-none d-md-block">
                        <h3>Welcome</h3>
                            <p>India's Best Shopping Store</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>    
        </>
    )
}

export default Carousel
