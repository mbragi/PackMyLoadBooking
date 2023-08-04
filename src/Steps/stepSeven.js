import Logo from "assets/img/logo.png";
import { Illustration, FormContainer } from "styles/style"
import IllustrationImage from "assets/img/date-info.png"
import { DatePicker } from 'antd';

const StepSeven = (props) => {
    return (
        <>
            <Illustration>
                <img className="logo" src={Logo} alt={"PackMyLoad Logo"} style={{ marginBottom: "117px" }} />
                <img src={IllustrationImage} alt="services" />
            </Illustration>
            <FormContainer>
                <h1>WHEN WILL YOU NEED US?</h1>
                <h4>If you don’t have an exact service date, please pick an approximate date. Keep in mind, weekday rates may be lower that weekends!</h4>
                <>
                    <label style={{ marginTop: "20px", textAlign: "initial", color: "#8C98A9", fontSize: "12px", opacity: 1, marginBottom: "7px" }}>Preferred Service Date</label>
                    <DatePicker
                        placeholder="01/07/2021"
                        format="MM-DD-YYYY"
                        onChange={(_, dateString) => {
                            props.formData.date = dateString
                            props.setFormData({ ...props.formData })
                        }}
                    />
                </>
            </FormContainer>
        </>
    )
}

export default StepSeven