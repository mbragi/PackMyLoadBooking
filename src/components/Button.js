import React from "react";
import ButtonBlock from "styles/ButtonBlock";
import Loader from "./Loader";

const Button = ({ loading, label, children, ...rest }) => {
    return (
        <ButtonBlock {...rest} aria-label={label}>
            {loading ? (
                <Loader size={15} />
            ) : (
                    <>
                        {children}
                    </>
                )}
        </ButtonBlock>
    );
};

export default Button;
