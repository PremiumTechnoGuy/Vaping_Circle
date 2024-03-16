import React from "react";
import { useAuth } from "../../utils/auth";
import axios from "axios";
import { apiUrl } from "../../data/env";
import "./Failure.css";
import Loader from "../Loader/loader";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";

function Success() {
  const [isLoading, setIsLoading] = React.useState(true);

  const nav = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const auth = useAuth();

  const token = localStorage.getItem("token");

  React.useEffect(() => {
    const tId = searchParams.get("t");
    const orderId = searchParams.get("s");
    const eventId = Number(searchParams.get("eventId"));
    const eci = searchParams.get("eci");
    let orderDocId = "";

    if (token) {
      // const id = toast.loading("Verifying...");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios
        .get(`${apiUrl}/api/v1/customer/verifyToken`, config)
        .then((res) => {
          console.log(res.data);
          auth.login(token, res.data.data);
          // toast.success("Fetched Data!");

          if (!tId || eventId !== 0) {
            toast.error("error verifying payment (id not present)!");
            setTimeout(() => {
              nav("/myOrder");
            }, 1000);
          }

          if (!orderId) {
            toast.error("error verifying payment (order id not present)!");
            setTimeout(() => {
              nav("/myOrder");
            }, 1000);
          } else {
            const orderObj = res.data.data.orders.find(
              (oObj) => oObj.vivaOrderId === orderId
            );
            if (!orderObj) {
              toast.error("Could not find the order in user's DB!");
              toast.error("Email us to sort your order!", { duration: 5000 });
              setTimeout(() => {
                nav("/");
              }, 5000);
            } else {
              orderDocId = orderObj.orderId;
              handleUpdateOrder(orderDocId, orderId, tId, eci, eventId);
            }
          }
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
          toast.error("Could not verify user!");
        });
    } else {
      toast.error("Could not verify login. Contact Support!");
      setIsLoading(false);
    }
  }, []);

  const handleUpdateOrder = (orderDocId, oId, tId, eci, eventId) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .patch(
        `${apiUrl}/api/v1/order/${orderDocId}`,
        { status: "paid", vivaTransactionCode: tId, eci, eventId },
        config
      )
      .then((res) => {
        toast.success("Payment & Verification Successful");
        setTimeout(() => {
          nav("/myOrder");
        }, 2500);
      })
      .catch((err) => {
        toast.error(
          err.response?.data?.message || "Couldn't update DB with new Payment!"
        );
        setTimeout(() => {
          nav("/myOrder");
        }, 3500);
      });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="redirect-message">
          Click{" "}
          <a
            href
            onClick={(e) => {
              e.preventDefault();
              nav("/myOrder");
            }}
          >
            Here
          </a>{" "}
          if you are not redirected.
        </div>
      )}
      <Toaster />
    </>
  );
}

export default Success;
