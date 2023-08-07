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
import { Pagination } from "antd";
import Button from "components/Button";

function App() {
  const [formData, setFormData] = React.useState({});
  const [current, setCurrent] = React.useState(1);
  const [loading, setLoading] = React.useState(false);

  // function success() {
  //   const modal = Modal.success({
  //     content:
  //       "Form submitted succefully, You'll get a mail with your input shortly",
  //     width: 350,
  //     centered: true,
  //     maskClosable: true,
  //     okText: "Go Home",
  //     onOk: () => {
  //       window.location.href = "https://www.packmyload.com/";
  //     },
  //   });

  //   setTimeout(() => {
  //     modal.destroy();
  //     window.location.href = "https://www.packmyload.com/";
  //   }, 3 * 1000);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(false);
    alert("Under Maintenance, Please check back later");
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
