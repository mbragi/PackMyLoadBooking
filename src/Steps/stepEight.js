import Logo from "assets/img/logo.png";
import { Illustration, FormContainer } from "styles/style"
import IllustrationImage from "assets/img/concerns-info.png"

const StepEight = (props) => {
    return (
        <>
            <Illustration>
                <img className="logo" src={Logo} alt={"PackMyLoad Logo"} style={{ marginBottom: "84px" }} />
                <img src={IllustrationImage} alt="services" />
            </Illustration>
            <FormContainer>
                <h1>DO YOU HAVE ANY CONCERNS?</h1>
                <h4>Moving can be quite the process, and its natural to have concerns. Please let us know below of any particular concerns you might have and we’ll do our best to put your mind at ease! If you don’t have any, just click on the “SUBMIT” button to continue.</h4>
                <label htmlFor="concerns" style={{ textAlign: "initial", color: "#8C98A9", fontSize: "12px", opacity: 1, marginBottom: "7px" }}>Please enter your concerns here.</label>
                <textarea
                    style={{
                        background: "#E0E7FF33 0% 0% no-repeat padding-box",
                        border: "1px solid #E0E7FF",
                        borderRadius: "5px",
                        opacity: 1
                    }}
                    id="concerns"
                    name="concerns"
                    placeholder="Message"
                    rows="9" cols="50"
                    onChange={(e) => {
                        props.formData.concerns = e.target.value
                        props.setFormData({ ...props.formData })
                    }} />
            </FormContainer>
        </>
    )
}

export default StepEight