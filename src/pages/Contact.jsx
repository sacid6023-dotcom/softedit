import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page fade-in">
      <section className="contact-header flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl">Get In Touch</h1>
        </div>
      </section>

      <section className="contact-section container grid items-start">
        <div className="contact-info flex-col gap-6">
          <h2 className="text-5xl">We're Here For You</h2>
          <p className="text-xl text-light fw-300 max-w-xl">
            Whether you have a question about our shades, need help with an order, or just want to share your Soft Edit experience, we'd love to hear from you.
          </p>
          
          <div className="contact-details mt-8 flex-col gap-4 text-lg fw-300">
            <div className="flex gap-4 items-center">
              <span className="fw-500">Address:</span>
              <span>Moradabad, India</span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="fw-500">Email:</span>
              <a href="mailto:samridhiarora79@gmail.com" className="hover-link">samridhiarora79@gmail.com</a>
            </div>
            <div className="flex gap-4 items-center">
              <span className="fw-500">Phone:</span>
              <a href="tel:9717122676" className="hover-link">+91 9717122676</a>
            </div>
            <div className="flex gap-4 items-center">
              <span className="fw-500">Hours:</span>
              <span>Mon - Fri, 9:00 AM - 6:00 PM IST</span>
            </div>
          </div>
        </div>

        <form className="contact-form flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group flex gap-4 w-full">
            <input type="text" placeholder="First Name" required className="w-full" />
            <input type="text" placeholder="Last Name" required className="w-full" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" required className="w-full" />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Phone Number" className="w-full" />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" required rows="6" className="w-full"></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>SEND MESSAGE</button>
        </form>
      </section>
    </div>
  );
}
