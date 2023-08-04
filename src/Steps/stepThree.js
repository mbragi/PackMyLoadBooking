import Logo from "assets/img/logo.png";
import { Illustration, FormContainer, RadioContainer } from "styles/style"
import IllustrationImage from "assets/img/services-info.png"
import { ReactComponent as TruckIcon } from "assets/img/truck-icon.svg";
import { ReactComponent as HouseIcon } from "assets/img/house-icon.svg";
import { ReactComponent as WarehouseIcon } from "assets/img/warehouse-icon.svg"
import { ReactComponent as BoxIcon } from "assets/img/box-icon.svg"
import { ReactComponent as CleaningIcon } from "assets/img/cleaning-icon.svg"
import { ReactComponent as MenIcon } from "assets/img/men-icon.svg"

const StepThree = (props) => {
    return (
        <>
            <Illustration>
                <img className="logo" src={Logo} alt={"PackMyLoad Logo"} style={{ marginBottom: "90px" }} />
                <img src={IllustrationImage} alt="services" />
            </Illustration>
            <FormContainer>
                <h1>HOW CAN WE HELP YOU?</h1>
                <h4>We offer a variety of services give the best experience possible. Which of these services are you asking about today?</h4>
                <RadioContainer wrap>
                    <div className="checkbox">
                        <input
                            type="checkbox"
                            id="move"
                            name="move"
                            value="Move"
                            onChange={(e) => {
                                props.formData.move = e.target.value
                                props.setFormData({ ...props.formData })
                            }}
                        />
                        <label htmlFor="move">
                            <TruckIcon />
                            <h3>Help Me Move</h3>
                        </label>
                    </div>
                    <div className="checkbox">
                        <input
                            type="checkbox"
                            id="pack"
                            name="pack"
                            value="Pack"
                            onChange={(e) => {
                                props.formData.pack = e.target.value
                                props.setFormData({ ...props.formData })
                            }}
                        />
                        <label htmlFor="pack">
                            <HouseIcon />
                            <h3>Help Me Pack</h3>
                        </label>
                    </div>
                    <div className="checkbox">
                        <input
                            type="checkbox"
                            id="storage"
                            name="storage"
                            value="Storage"
                            onChange={(e) => {
                                props.formData.storage = e.target.value
                                props.setFormData({ ...props.formData })
                            }}
                        />
                        <label htmlFor="storage">
                            <WarehouseIcon />
                            <h3>Storage Services</h3>
                        </label>
                    </div>
                    <div className="checkbox">
                        <input
                            type="checkbox"
                            id="supplies"
                            name="supplies"
                            value="Supplies"
                            onChange={(e) => {
                                props.formData.supplies = e.target.value
                                props.setFormData({ ...props.formData })
                            }}
                        />
                        <label htmlFor="supplies">
                            <BoxIcon />
                            <h3>I Need Supplies</h3>
                        </label>
                    </div>
                    <div className="checkbox">
                        <input
                            type="checkbox"
                            id="cleaning"
                            name="cleaning"
                            value="Cleaning"
                            onChange={(e) => {
                                props.formData.cleaning = e.target.value
                                props.setFormData({ ...props.formData })
                            }}

                        />
                        <label htmlFor="cleaning">
                            <CleaningIcon />
                            <h3>I Need Cleaning</h3>
                        </label>
                    </div>
                    <div className="checkbox">
                        <input
                            type="checkbox"
                            id="rearrange"
                            name="rearrange"
                            value="Re-arrange"
                            onChange={(e) => {
                                props.formData.rearrange = e.target.value
                                props.setFormData({ ...props.formData })
                            }}
                        />
                        <label htmlFor="rearrange">
                            <MenIcon />
                            <h3>Rearrange My Space</h3>
                        </label>
                    </div>
                </RadioContainer>
            </FormContainer>
        </>
    )
}

export default StepThree