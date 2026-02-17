export default function contact() {
    return (
        <div>
            <h1> Contact Me </h1>

            <div className="contact">
                <form className="form-container">

                    <label className="contactFormBox">
                        Name:
                        <input type="text" name="name" required />
                    </label>
                    <br/>
                    <label className="contactFormBox">
                        Email:
                        <input type="email" name="email" required />
                    </label>
                    <br/>
                    <label className="contactFormBox">
                        Message:
                        <textarea rows="5" name="message" required></textarea>
                    </label>
                    <br/>
                    <button type="submit" className="submitButton">Send</button>

                </form>
            </div>
        </div>
    );
}