import sreyly from '../photo/ly-removebg-preview (2).png'
function Contact() {
    return (
        <>
            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Contact Us</h1>
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Message</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" class="btn btn-primary mt-3">Submit</button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div className="sreyly">
                                <img src={sreyly} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;