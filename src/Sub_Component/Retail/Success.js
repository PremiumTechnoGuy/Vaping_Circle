import React from "react";
import { useAuth } from "../../utils/auth";
import axios from "axios";
import { apiUrl } from "../../data/env";
import Loader from "../Loader/loader";
import toast, { Toaster } from "react-hot-toast";

function Success() {
  const [isLoading, setIsLoading] = React.useState(true);

  const auth = useAuth();

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const id = toast.loading("Verifying...");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios
        .get(`${apiUrl}/api/v1/customer/verifyToken`, config)
        .then((res) => {
          console.log(res.data);
          auth.login(token, res.data.data);
          toast.success("Verified Succesfully!", { id });
          setTimeout(() => {
            setIsLoading(false);
            console.log(res.data.data);
          }, 1500);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
          toast.error("Could not verify!", { id });
        });
    } else {
      toast.error("Could not verify login!");
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>Perfectly Loaded, like all things should!</div>
      )}
      <Toaster />
    </>
  );
}

export default Success;
