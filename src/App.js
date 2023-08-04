import React from "react";
import "./styles/App.css";
import Card from "components/Card";
import StepOne from "Steps/stepOne";
import StepTwo from "Steps/stepTwo";
import StepThree from "Steps/stepThree";
import StepFour from "Steps/stepFour";
import StepFive from "Steps/stepFive";
import StepSix from "Steps/stepSix";
import StepSeven from "Steps/stepSeven";
import StepEight from "Steps/stepEight";
import { Pagination, message, Modal } from "antd";
import Button from "components/Button";
import axios from "axios";

function App() {
	const [formData, setFormData] = React.useState({});
	const [current, setCurrent] = React.useState(1);
	const [loading, setLoading] = React.useState(false);

	function success() {
		const modal = Modal.success({
			content:
				"Form submitted succefully, You'll get a mail with your input shortly",
			width: 350,
			centered: true,
			maskClosable: true,
			okText: "Go Home",
			onOk: () => {
				window.location.href = "https://www.packmyload.com/";
			},
		});

		setTimeout(() => {
			modal.destroy();
			window.location.href = "https://www.packmyload.com/";
		}, 3 * 1000);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (Object.keys(formData).length === 0) {
			setCurrent(1);
			message.warn("Please fill in the form before submitting");
		} else if (!formData.emailaddress) {
			setCurrent(1);
			message.warn("Email is required");
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.emailaddress)
		) {
			setCurrent(1);
			message.warn("Invalid Email");
		} else if (!formData.address) {
			setCurrent(5);
			message.warn("Moving address is required");
		} else if (!formData.date) {
			setCurrent(7);
			message.warn("Moving date is required");
		} else {
			setLoading(!loading);
			axios
				.post(process.env.REACT_APP_BASE_URL + "/booking", formData)
				.then((res) => {
					if (res) {
						setLoading(false);
						success();
					}
				})
				.catch((err) => {
					if (err) {
						setLoading(false);
						message.error("Something went wrong please try again");
					}
				});
		}
	};

	const steps = [
		{
			content: <StepOne setFormData={setFormData} formData={formData} />,
		},
		{
			content: <StepTwo setFormData={setFormData} formData={formData} />,
		},
		{
			content: <StepThree setFormData={setFormData} formData={formData} />,
		},
		{
			content: <StepFour setFormData={setFormData} formData={formData} />,
		},
		{
			content: <StepFive setFormData={setFormData} formData={formData} />,
		},
		{
			content: <StepSix setFormData={setFormData} formData={formData} />,
		},
		{
			content: <StepSeven setFormData={setFormData} formData={formData} />,
		},
		{
			content: <StepEight setFormData={setFormData} formData={formData} />,
		},
	];

	return (
		<div className="App">
			<>
				<Card
					distribution={"row"}
					distributionMobile={"column"}
					heightMobile={"100vh"}
					noBodyPadding
				>
					{steps[current - 1].content}
					<div className="steps-action">
						<Button
							center
							long
							onClick={(e) => {
								if (current < steps.length) {
									setCurrent(current + 1);
								} else handleSubmit(e);
							}}
							loading={loading}
						>
							{current !== steps.length ? "continue" : "submit"}
						</Button>
						<Pagination
							current={current}
							pageSize={1}
							total={8}
							// size="small"
							onChange={(current) => {
								setCurrent(current);
							}}
						/>
					</div>
				</Card>
			</>
		</div>
	);
}

export default App;
