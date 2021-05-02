import "./App.css";
import { Player } from "@lottiefiles/react-lottie-player";

const formFields = [
  {
    name: "Phone Number",
    key: "phone",
    placeholder: "Enter Phone Number",
    type: "tel",
    limit: 10,
    regex: "[0-9]{10}",
    isRequired:true
  },
  {
    name: "Email",
    key: "email",
    placeholder: "Enter email (Optional)",
    type: "email",
    isRequired:false
  },
  {
    name: "Full Name",
    key: "name",
    placeholder: "Enter Full Name",
    type: "text",
    limit: 50,
    regex: "[A-Za-z ]+",
    isRequired:true
  },
  
  {
    name: "Area Pincode",
    key: "pincode",
    placeholder: "Enter your Pin Code",
    type: "tel",
    limit: 6,
    regex: "[0-9]{6}",
    isRequired:true
  },
  {
    name: "Year of Birth",
    key: "dob",
    placeholder: "Enter Year of Birth",
    type: "tel",
    limit: 4,
    regex: "[0-9]{4}",
    isRequired:true
  },
];

function App() {
  const submitForm = (e) => {
    e.preventDefault();
    const submitedResponse = new FormData(e.target);
    formFields.forEach((element) => {
      console.log(submitedResponse.get(element.key));
    });
  };
  return (
    <div className="App">
      <Player
        autoplay
        loop
        speed={0.5}
        src="https://funngagedev.s3.ap-south-1.amazonaws.com/md/52176-covid.json"
        style={{ height: "300px", width: "300px" }}
      />

    <h2 className="heading-main">Get COVID-19 Vaccination alert in your area</h2>
   
      <form onSubmit={submitForm} className="paper-shadow-effect form-container">
        <ul className="list-box">
          {formFields.map((element) => (
            <li style={{marginBottom:"10px"}}>
              <label className="label-box" htmlFor={element.key}>
                {element.name} -
              </label>
              <input
                type={element.type}
                className="text-box"
                maxLength={element.limit}
                name={element.key}
                placeholder={element.placeholder}
                data-parse="uppercase"
                pattern={element.regex}
                required={element.isRequired}
              />
            </li>
          ))}
          <li>
            <button type="submit" className="submit-button">Get Alert</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default App;
