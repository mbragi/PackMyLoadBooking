import Logo from "assets/img/logo.png";
import { Illustration, FormContainer } from "styles/style"
import Form from "styles/FormBlock";
import Input from "components/Input"
import { ReactComponent as IllustrationImage } from "assets/img/personal-info.svg"

const StepOne = ({ formData, setFormData }) => {
    return (
        <>
            <Illustration>
                <img className="logo" src={Logo} alt={"PackMyLoad Logo"} />
                <IllustrationImage />
            </Illustration>
            <FormContainer>
                <h1>TELL US A LITTLE ABOUT YOURSELF</h1>
                <h4>Hello, good to have you here! Tell us you name, phone and email, and we will get you started.</h4>
                <Form>
                    <Input
                        label={"Full Name"}
                        name={"name"}
                        id={"name"}
                        placeholder="John Doe"
                        value={formData.name || ""}
                        onChange={(e) => {
                            formData.name = e.target.value
                            setFormData({ ...formData })
                        }}
                    />
                    <Input
                        label={"Email Address"}
                        name={"emailaddress"}
                        id={"emailaddress"}
                        type={"email"}
                        placeholder="johndoe@email.com"
                        value={formData.emailaddress || ""}
                        onChange={(e) => {
                            formData.emailaddress = e.target.value
                            setFormData({ ...formData })
                        }}
                    />
                    <Input
                        label={"Phone Number"}
                        name={"phonenumber"}
                        id={"phonenumber"}
                        placeholder="08023456789"
                        value={formData.phonenumber || ""}
                        onChange={(e) => {
                            formData.phonenumber = e.target.value
                            setFormData({ ...formData })
                        }}
                    />
                </Form>
            </FormContainer>
        </>
    )
}

export default StepOne