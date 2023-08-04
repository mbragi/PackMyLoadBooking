import Logo from "assets/img/logo.png";
import { Illustration, FormContainer } from "styles/style";
import IllustrationImage from "assets/img/address-info.png";
import Form from "styles/FormBlock";
import Autocomplete from "react-google-autocomplete";

const StepFive = ({ formData, setFormData }) => {
	return (
		<>
			<Illustration>
				<img
					className="logo"
					src={Logo}
					alt={"PackMyLoad Logo"}
					style={{ marginBottom: "51px" }}
				/>
				<img src={IllustrationImage} alt="contact" />
			</Illustration>
			<FormContainer>
				<h1>WHAT ADDRESS ARE YOU MOVING FROM?</h1>
				<h4 style={{ width: "426px" }}>
					We’ll send our highly trained crew to this address to perform the
					services you have selected.
				</h4>
				<Form>
					<p
						style={{
							fontFamily: "Montserrat",
							display: "block",
							color: "#8C98A9",
							fontWeight: 400,
							fontSize: "12px",
							marginBottom: "10px",
							width: "93%",
						}}
					>
						Where are you moving from
					</p>
					<Autocomplete
						name="address"
						id="address"
						placeholder="e.g 78, Bode Thomas Street"
						style={{
							background: "#E0E7FF33",
							boxShadow: "0px 3px 6px #00000005",
							borderRadius: "5px",
							opacity: 1,
							fontSize: "13px",
							boxSizing: "border-box",
							border: "1px solid #E0E7FF",
							padding: "15px 14px",
							width: "100%",
							maxWidth: "486px",
							height: "40px",
						}}
						className="autocomplete"
						onBlur={(e) => {
							formData.address = e.target.value;
							setFormData({ ...formData });
						}}
						onPlaceSelected={(place) => {
							formData.address = place.formatted_address;
							setFormData({ ...formData });
						}}
						types={["geocode"]}
						componentRestrictions={{ country: "ng" }}
					/>
					<p
						style={{
							fontFamily: "Montserrat",
							display: "block",
							color: "#8C98A9",
							fontWeight: 400,
							fontSize: "12px",
							marginBottom: "10px",
							width: "93%",
						}}
					>
						Where are you moving to
					</p>
					<Autocomplete
						name="address"
						id="address"
						placeholder="e.g 78, Bode Thomas Street"
						style={{
							background: "#E0E7FF33",
							boxShadow: "0px 3px 6px #00000005",
							borderRadius: "5px",
							opacity: 1,
							fontSize: "13px",
							boxSizing: "border-box",
							border: "1px solid #E0E7FF",
							padding: "15px 14px",
							width: "100%",
							maxWidth: "486px",
							height: "40px",
						}}
						className="autocomplete"
						onBlur={(e) => {
							formData.toAddress = e.target.value;
							setFormData({ ...formData });
						}}
						onPlaceSelected={(place) => {
							formData.toAddress = place.formatted_address;
							setFormData({ ...formData });
						}}
						types={["geocode"]}
						componentRestrictions={{ country: "ng" }}
					/>
				</Form>
			</FormContainer>
		</>
	);
};

export default StepFive;
