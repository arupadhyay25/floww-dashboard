getOrderlistData();

function getOrderlistData() {
  axios
    .get("https://backend.gofloww.co/api/v1/insight-apis/get-list-of-orders/")
    .then(function (response) {
      let responseData = JSON.parse(response.data);
      const sortByStatus = document.getElementById(
        "floww-sort-by-status"
      ).value;
      if (sortByStatus == "all") {
        addOrderListDetails(responseData.orderList);
      } else if (sortByStatus == "enroute") {
        let enroutestatus = responseData.orderList.filter(
          (e) => e.current_status == "enroute"
        );
        addOrderListDetails(enroutestatus);
      } else if (sortByStatus == "delivered") {
        let deliveredstatus = responseData.orderList.filter(
          (e) => e.current_status == "delivered"
        );
        addOrderListDetails(deliveredstatus);
      } else if (sortByStatus == "requested") {
        let requestedstatus = responseData.orderList.filter(
          (e) => e.current_status == "requested"
        );
        addOrderListDetails(requestedstatus);
      } else if (sortByStatus == "assigned") {
        let assignedstatus = responseData.orderList.filter(
          (e) => e.current_status == "assigned"
        );
        addOrderListDetails(assignedstatus);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function addOrderListDetails(orderList_data) {
  var transporter_table_body = document.querySelector(
    ".floww-orderlist-table-row"
  );
  transporter_table_body.innerHTML = `${orderList_data
    .map(
      (order) => `
    <tr onclick="showsingleorderDetails()">
      <td>
          <label class="${
            order.current_status === "delivered"
              ? "label-basic label-delivered"
              : order.current_status === "enroute"
              ? "label-basic label-enroute"
              : order.current_status === "assigned"
              ? "label-basic label-assigned"
              : "label-basic label-requested"
          }">
              ${order.current_status}
          </label
      </td>
        <td>${order.orderId}</td>
        <td class="floww-table-address">${order.pickupAddress}</td>
        <td class="floww-table-address">${order.dropAddress}</td>
        <td>${order.dropContactNo}</td>
        <td>${order.pickupContactNo}</td>
      <td>${order.dropContactNo}</td>
      <td>${order.customerId}</td>
      <td>${order.deliveryAgentId}</td>
      </tr>` // <-- remove the comma after </td> in the last column
    )
    .join("")}`;
}
function showsingleorderDetails() {
  console.log("mjsjds");
  document.getElementById("floww-orderlist-table").style.display = "none";
  document.querySelector(".floww-single-order-details").innerHTML = `
  <div>
    <div>
      <img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" width="40px" height="40px" class="floww-details-form-goback" onclick="gobacktoOrder()"/>
      <h1>All Details</h1>
    </div>
    <hr/>
    <div></div>
  </div>
  `;
}

function gobacktoOrder() {
  document.getElementById("floww-orderlist-table").style.display = "block";
  document.querySelector(".floww-single-order-details").innerHTML = "";
}
