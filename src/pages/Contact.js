export const Contact = () => {
    return (
        <section id="contact">
            <div className="contact text-center p-3">
                <h1>Contact me</h1>
                <p>Please contact me directly at <span><a href="mailto:prashantchaudhary1106@gmail.com">prashantchaudhary1106@gmail.com</a></span> or through this form.</p>
                <div className="contactDetails mx-auto mt-5">
                    <input type="email" name="email" id="email" className="form-control p-3 rounded-3 mb-3" placeholder="Your email" />
                    <textarea name="message" id="message" cols="30" rows="6" className="form-control p-3 rounded-3 mb-3" placeholder="Your message"></textarea>
                    <div className="text-start">
                        <button className="grayButton myBtn">Submit <i class="fa-regular fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
        </section>
    )
}