import { contactAddress } from "../../data";

function ContactAddress() {
  return (
    <div className="contact-content">
      {contactAddress.map((data, index: any) => {
        return (
          <div className="contact-address" key={index}>
            <p>{data.title}</p>
            <a href={data.mailTo}>
              <p>{data.email}</p>
            </a>
            <p>{data.phone}</p>
            <p>{data.country}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ContactAddress;
