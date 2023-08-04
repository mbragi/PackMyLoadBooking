import Logo from "assets/img/logo.png";
import { Illustration, FormContainer } from "styles/style"
import IllustrationImage from "assets/img/space-info.png"
import Input from "components/Input"
import Form from "styles/FormBlock";

const StepSix = (props) => {
    return (
        <>
            <Illustration>
                <img className="logo" src={Logo} alt={"PackMyLoad Logo"} style={{ marginBottom: "136px" }} />
                <img src={IllustrationImage} alt="services" />
            </Illustration>
            <FormContainer>
                <h1>HOW BIG IS YOUR SPACE?</h1>
                <h4>You may not know this off the top of your head (and that’s ok). Having your exact square footage will allow us to give you a much more accurate estimate.</h4>
                <Form>
                    <Input
                        label={"Enter Size in Square Feet"}
                        name={"size"}
                        id={"size"}
                        placeholder="80"
                        onChange={(e) => {
                            props.formData.size = e.target.value
                            props.setFormData({ ...props.formData })
                        }}
                    />
                </Form>
                <p style={{ fontSize: "12px", color: "#2E5F9E", cursor: "pointer" }}>I don’t know my square feet</p>
            </FormContainer>
        </>
    )
}

export default StepSix