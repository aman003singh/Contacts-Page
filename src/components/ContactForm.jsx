import Button from "./Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {

// there is an onsubmit funtion on the form tag! as soon as the submit button is clicked the onsubmit function is called! then there, preventdefault method stops  page from reloading and loosing CSSFontFeatureValuesRule. then we are getting value by using event.target[] and putting the value in setname functions present just below. the set function put the value inside the corresponding varibales then, if the value changes then the div present at last of this code will print the new values and the same haapens for email and text



    // storing these values in variable
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [text , setText] = useState("");


  const onSubmit = (event) => {
    // stops page from reloading after the form is filled and submit button is clicked |
        event.preventDefault();

    
    // getting value from the input field 
    console.log("name",event.target[0].value);
    console.log("mail",event.target[1].value);
    console.log("text",event.target[2].value);


// displaying the input results below the submit button 
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)
  };

  return (
    <section className="form">
      <div className="Contactform">
        <div className="topbuttons">
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />

          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>

        <Button
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
          isOutline={true}
        />

{/* all input values start here---------------------------- */}
        <form className="forminput" onSubmit={onSubmit}>
          <div className="form_controller">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className="form_controller">
            <label htmlFor="mail">Email</label>
            <input type="text" name="mail" />
          </div>

          <div className="form_controller">
            <label htmlFor="name">Text</label>
            <textarea name="text" cols="30" rows="10"></textarea>
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT" />
          </div>

          <div>
            {
                name + "  " + email + "  " + text
            }
          </div>
        </form>

      </div>
      <div className="image">
        <img src="./public/images/img.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
