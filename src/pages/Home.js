import { Carousel } from "react-bootstrap";
import pc3 from '../photo/pc1.webp'
import pc1 from '../photo/pc3.webp'
import pc4 from '../photo/pc0.jpg'
import sreyly from '../photo/ly-removebg-preview (2).png'
function Home() {
    return (
       <>
        <div className="slider">
        <Carousel>
            <Carousel.Item interval={1000}>
                <img src={pc3}  style={{height:400}} />
            </Carousel.Item>
            <Carousel.Item interval={500} >
                <img src={pc1}  style={{height:400}}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={pc4}  style={{height:400}}/>
            </Carousel.Item>
        </Carousel>
        </div>

        <div className="container ">
            <div className="row ">
                <div className="col-md-6" style={{marginTop:100}}>
                    <b className="title">Fornt-End Developer</b>
                    <h1>
                        <b>Hello,My name Long Sreyly.
                         I'm a Front-End Developer</b>
                    </h1>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="sreyly">
                        <img src={sreyly}/>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}
export default Home;