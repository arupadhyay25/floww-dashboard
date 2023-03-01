getAgentlistData();
function getAgentlistData() {
  axios
    .get(
      "https://backend.gofloww.co/api/v1/insight-apis/get-list-of-delivery-agents/"
    )
    .then(function (response) {
      let responseData = JSON.parse(response.data);
      const sortByAgentStatus = document.getElementById(
        "floww-sort-by-agent-status"
      ).value;
      if (sortByAgentStatus == "all") {
        addagentlistDetails(responseData.deliveryAgentList);
      } else if (sortByAgentStatus == "inactive") {
        let inactiveagent = responseData.deliveryAgentList.filter(
          (e) => e.agentStatus == "inactive"
        );
        addagentlistDetails(inactiveagent);
      } else if (sortByAgentStatus == "active") {
        let activeagent = responseData.deliveryAgentList.filter(
          (e) => e.agentStatus == "active"
        );
        addagentlistDetails(activeagent);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function addagentlistDetails(agentList_data) {
  var transporter_table_body = document.querySelector(
    ".floww-agentlist-table-row"
  );
  transporter_table_body.innerHTML = `${agentList_data
    .map(
      (e) => `
        <tr>
          <td>
              <label class="${
                e.agentStatus === "inactive"
                  ? "label-basic2 label-inactive"
                  : "label-basic2 label-active"
              }">
                  ${e.agentStatus}
              </label
          </td>
            <td>${e.deliveryAgentId}</td>
            <td>${e.agentName}</td>
            <td>${e.contactNo}</td>
          <td>${e.deliveryVendorList && e.deliveryVendorList[0].vendor_id}</td>
          </tr>` // <-- remove the comma after </td> in the last column
    )
    .join("")}`;
}
