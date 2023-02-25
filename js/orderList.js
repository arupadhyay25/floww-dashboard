axios
  .get("https://backend.gofloww.co/api/v1/insight-apis/get-list-of-orders/")
  .then(function (response) {
    let responseData = JSON.parse(response.data);
    addOrderListDetails(responseData.orderList);
  })
  .catch(function (error) {
    console.log(error);
  });

function addOrderListDetails(orderList_data) {
  var transporter_table_body = document.querySelector(
    ".floww-orderlist-table-row"
  );
  transporter_table_body.innerHTML = `${orderList_data
    .map(
      (order) => `
    <tr>
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
