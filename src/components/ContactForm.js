import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Your massage for Us!</h1>
      <form>
        <input placeholder="Your Name" />
        <input placeholder="Your Email address" />
        <input placeholder="Your Subject" />
        <textarea placeholder="Type your massage" rows="4"></textarea>
        <button>Send Massage</button>
      </form>
    </div>
  );
}
export default ContactForm;
