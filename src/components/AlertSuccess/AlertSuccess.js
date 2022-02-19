import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

const AlertSuccess = () => {
  const [alertShow, setAlertShow] = useState(true);

  if (alertShow) {
    return (
      <>
        <Alert variant="success" onClose={() => setAlertShow(false)} dismissible>
          🎉<strong>Black Friday Sale!</strong>🎉 Enjoy shopping with{" "}
          <strong>50% off</strong> until 28-February-2022!
        </Alert>
      </>
    );
  }

  return <></>;
};

export default AlertSuccess;
