import React from "react";
import { useAuth } from "../../utils/auth";
import axios from "axios";
import { apiUrl } from "../../data/env";

function Failure() {
  const auth = useAuth();

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios
        .get(`${apiUrl}/api/v1/customer/verifyToken`, config)
        .then((res) => {
          console.log(res.data);
          auth.login(token, res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return <></>;
}

export default Failure;
