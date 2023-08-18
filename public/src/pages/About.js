import Cards from "../component/Cards";

function About() {
    return (
        <>

            <h1>About Me</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>
                            My name Long Sreyly.I'm from Thbong Khmum province.
                            Now a day I'm a student year 4 of majoring Computer Science at Royal University Of Phnom Penh.
                            I have gained a comprehensive understanding of programming concepts and problem-solving strategies. My training at ISTAD Institute further honed my skills in web development, where I acquired proficiency in HTML, CSS, Bootstrap, and JavaScript. Moreover, my experience with modern JavaScript frameworks, particularly React, has enabled me to design and build interactive, responsive web applications.
                        </p>
                    </div>
                </div>
            </div>
            <h1>My Project</h1>
            <div className="container">
                <div className="row">
                    <Cards 
                    
                    imageSource="https://cdn.pixabay.com/photo/2017/07/27/15/24/movie-2545676_640.jpg"
                    title="Legend Movie"
                    text="The movie have a importance as feature so view-link view-detail search content dynamic." 
                    link="https://movie-legend-gybopsh0u-sreyly-long.vercel.app/"      
                    />

                    <Cards 
                    
                    imageSource="https://cdn.pixabay.com/photo/2016/11/29/05/07/breads-1867459_640.jpg"
                    title="Domino~Cake"
                    text="The domino cake have a importance as feature so view-link responsive static-data."   
                    link="https://domino-js6zpintg-sreyly-long.vercel.app/"    
                    />

                    <Cards 
                    
                    imageSource="https://cdn.pixabay.com/photo/2017/06/06/22/37/italian-cuisine-2378729_640.jpg"
                    title="Croco-Vegetables"
                    text="The Croco-Vegetable have a static-data and responsive."  
                    link="https://responsive-croco-website-r8wj8yrxp-sreyly-long.vercel.app/"     
                    />

                </div>
            </div>

        </>
    )
}
export default About;