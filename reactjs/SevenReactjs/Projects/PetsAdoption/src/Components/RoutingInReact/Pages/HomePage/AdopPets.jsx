import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

const AdoptPetPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className=" min-vh-50 w-vw-100 d-flex flex-column align-items-center py-5">
      <h1 className="text-center text-light mb-4">Planning to Adopt a Pet?</h1>
      <p className="text-center text-secondary col-md-8">
        Adopting a pet is a wonderful way to bring joy into your home and provide a loving animal with a forever family.
        Millions of pets in shelters are waiting for a second chance. By adopting, you not only save a life but also gain a loyal companion.
        Consider adoption as a responsible and fulfilling way to expand your family with a furry friend.
      </p>
      <p className="text-center text-muted col-md-8 mt-2">
        Before adopting, ensure that you are ready for a long-term commitment. Pets require love, care, and attention.
        Research different breeds and their needs to find the best match for your lifestyle.
      </p>
      <button
        className="btn btn-primary mt-4"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Hide Form" : "Start Adoption Process"}
      </button>

      {showForm && (
        <div className="card mt-4 p-4 shadow col-md-6">
          <h2 className="text-center text-dark mb-3">Adoption Interest Form</h2>
          <p className="text-muted text-center mb-2">
            Fill out this form to express your interest in adoption. A shelter representative will contact you soon.
          </p>
          <form className="needs-validation">
            <div className="mb-3">
              <input type="text" placeholder="Your Name" className="form-control" required />
            </div>
            <div className="mb-3">
              <input type="email" placeholder="Your Email" className="form-control" required />
            </div>
            <div className="mb-3">
              <textarea placeholder="Why do you want to adopt?" className="form-control" rows="3" required></textarea>
            </div>
            <button className="btn btn-success w-100">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdoptPetPage;