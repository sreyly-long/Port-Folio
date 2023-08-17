const Cards =(props) => {
    return (
        <>
            <div className="col-md-4 ">
                <div className="card mt-3 h-100">
                    <img src={props.imageSource}class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5>{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <a href={props.link} class="btn btn-primary ">view website</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cards;