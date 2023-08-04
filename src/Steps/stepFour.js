import Logo from "assets/img/logo.png";
import { Illustration, FormContainer, RadioContainer } from "styles/style"
import IllustrationImage from "assets/img/customer-info.png"
import BusinessIcon from "assets/img/office.png";
import HomeIcon from "assets/img/home.png";

const StepFour = (props) => {
    return (
        <>
            <Illustration>
                <img className="logo" src={Logo} alt={"PackMyLoad Logo"} style={{ marginBottom: 0 }} />
                <img src={IllustrationImage} alt="contact" />
            </Illustration>
            <FormContainer>
                <h1>ARE THIS SEVICES FOR A HOME OR BUSINESS?</h1>
                <h4 style={{ width: "426px" }}>Moving a household is different from moving a business! This information helps us allocate people and supplies to expertly execute your move.</h4>
                <RadioContainer>
                    <div className="radio">
                        <input
                            type="radio"
                            id="home"
                            name="serviceType"
                            value="home"
                            onChange={(e) => {
                                props.formData.serviceType = e.target.value
                                props.setFormData({ ...props.formData })
                            }}
                        />
                        <label htmlFor="home"
                            style={{
                                backgroundColor: "rgba(77, 183, 254, 0.1)",
                                boxShadow: "0px 3px 6px rgba(39, 45, 59, 0.2)"
                            }}>
                            <img src={HomeIcon} alt="Telephone Icon" />
                            <h3>Home</h3>
                        </label>
                    </div>
                    <div className="radio">
                        <input
                            type="radio"
                            id="business"
                            name="serviceType"
                            value="business"
                            onChange={(e) => {
                                props.formData.serviceType = e.target.value
                                props.setFormData({ ...props.formData })
                            }}
                        />
                        <label
                            htmlFor="business"
                            style={{
                                backgroundColor: "rgba(77, 183, 254, 0.1)",
                                boxShadow: "0px 3px 6px rgba(39, 45, 59, 0.2)"
                            }}>
                            <img src={BusinessIcon} alt="Email Icon" />
                            <h3>Business</h3>
                        </label>
                    </div>
                </RadioContainer>
            </FormContainer>
        </>
    )
}

export default StepFour