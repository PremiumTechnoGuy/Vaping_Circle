import React from "react";
import { useAuth } from "../../utils/auth";
import axios from "axios";
import { apiUrl } from "../../data/env";
import "./Failure.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Failure() {
  const [isLoading, setIsLoading] = React.useState(true);

  const nav = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const auth = useAuth();

  const token = localStorage.getItem("token");

  React.useEffect(() => {
    const orderId = searchParams.get("s");
    const eventId = searchParams.get("eventId");
    let orderDocId = "";

    if (token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios
        .get(`${apiUrl}/api/v1/customer/verifyToken`, config)
        .then((res) => {
          console.log(res.data);
          auth.login(token, res.data.data);

          if (!orderId) {
            toast.error(
              "error cancelling payment (order id not present). Contact Support"
            );
            setTimeout(() => {
              nav("/");
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
              }, 5200);
            } else {
              orderDocId = orderObj.orderId;
              handleCancelOrder(orderDocId, orderId, eventId);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleCancelOrder = (orderDocId, oId, eventId) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .patch(
        `${apiUrl}/api/v1/order/${orderDocId}`,
        { status: "cancelled", eventId },
        config
      )
      .then((res) => {
        console.log(res.data);
        toast.success("Payment Cancelled!");
        setTimeout(() => {
          nav("/myOrder");
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          err.response?.data?.message || "Couldn't update DB with new Payment!"
        );
        setTimeout(() => {
          nav("/");
        }, 3500);
      });
  };

  return (
    <>
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
      <Toaster />
    </>
  );
}

export default Failure;
