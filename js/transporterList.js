window.onload = function () {
  document.querySelector(".table").style.display = "none";
  getTransportlistData();
};

function getTransportlistData() {
  axios
    .get("https://backend.gofloww.co/api/v1/insight-apis/get-list-of-vendors/")
    .then(function (response) {
      let responseData = JSON.parse(response.data);
      document.querySelector(".table").style.display = "block";
      const sortByPlan = document.getElementById("floww-sort-by-plan").value;
      if (sortByPlan == "all") {
        addTransporterDetails(responseData.vendorList);
      } else if (sortByPlan == "basic") {
        let basicplanlist = responseData.vendorList.filter(
          (e) => e.vendorPlan == "basic"
        );
        addTransporterDetails(basicplanlist);
      } else if (sortByPlan == "pro") {
        let proplanlist = responseData.vendorList.filter(
          (e) => e.vendorPlan == "pro"
        );
        addTransporterDetails(proplanlist);
      }
      document.querySelector(".floww-loading").style.display = "none";
    })
    .catch(function (error) {
      console.log(error);
    });
}

function addTransporterDetails(vendorList_data) {
  var transporter_table_body = document.querySelector(
    ".floww-transport-table-row"
  );
  transporter_table_body.innerHTML = `${vendorList_data
    .map(
      (e) => `
        <tr style="cursor:pointer" onclick="showDetails('${e.vendorId}')">
        <td><label class="${
          e.vendorPlan === "pro"
            ? "label-basic label-plan-pro"
            : "label-basic label-plan"
        }"
         >${e.vendorPlan}</label></td>
         <td>${e.vendorId}</td>
         <td>${e.contactNo}</td>
         <td>${e.contactPerson}</td>
         <td>${e.vendorName}</td>
         <td>${e.region}</td>
         <td>${
           e.deliveryAgentList[0] && e.deliveryAgentList[0].delivery_agent_id
         } I ${
        e.deliveryAgentList[0] && e.deliveryAgentList[0].delivery_agent_name
      }</td>
        </tr>` // <-- remove the comma after </td> in the last column
    )
    .join("")}`;
}

// showDetails();
function showDetails(vendor_id) {
  document.querySelector(".floww-filter-list").style.display = "none";
  let detailsdiv = document.querySelector(".floww-orderdetails");

  // console.log(vendor_id);

  let data = {
    vendor_id: "VEN000019",
    contact_no: "7090003434",
    contact_person: "unknown",
    vendor_name: "XPL Delivery Solutions",
    vendor_code: "1d6c5f37d2194c37",
    aadhaar_no: "000000000000",
    region: "guwahati",
    address: "36th Cross, 5th Block Jayanagar Bangalore",
    pincode: "781006",
    founding_year: "2010",
    rating: "2.3",
    fleet_type: "tempo",
    fleet_size: "more than 10",
    badges: ["Sanitized-Fleet", "mr. clean", "Perfection"],
    web_link: "N/A",
    intro_description: "text0",
    headline_text: "text0",
    logo_link: "http://localhost:5501/img/logo/logo.png",
    order_base_charge: "100",
    per_km_charge: "30",
    per_kg_charge: "50",
    rental_base_charge: "N/A",
    per_km_charge_rental: "N/A",
    per_hr_charge_rental: "N/A",
    vendor_account_locked: false,
    preferred_language: "en",
    color_palette: "palette1",
    GST_no: "N/A",
    aadhaar_no_front_image_link:
      "https://adarshc.com/index/ent/document/default/aadhar.jpg",
    delivery_agent_list: [
      {
        delivery_agent_id: "AGE000018",

        delivery_agent_name: "Abhishek ",
      },
      {
        delivery_agent_id: "AGE000019",

        delivery_agent_name: "Prakhar",
      },
      {
        delivery_agent_id: "AGE000020",

        delivery_agent_name: "Anish",
      },
    ],
    device_id: "N/A",
    eKYC_status: "incomplete",
    pan_no: "N/A",
    pan_no_image_back_link:
      "https://adarshc.com/index/ent/document/default/pan.jpg",
    pan_no_image_front_link:
      "https://adarshc.com/index/ent/document/default/pan.jpg",
    vendor_plan: "basic",
    email_id: "N/A",
    device_id_2: "N/A",
  };
  // console.log(Object.keys(data).length);

  detailsdiv.innerHTML = `
  <div>
  <div class="floww-detailpage-header">
      <img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" width="40px" height="40px" class="floww-details-form-goback" onclick="goback()"/>
      <h1>All Details</h1>
  </div>
  <hr/>
  <form class="floww-details-form" style="margin-top:20px">
  <ul class="detail-page-ul">
        
        <li>
          <label class="row-detals-label">vendor Id :</label>
          ${data.vendor_id}
        </li>
        <li>
          <label class="row-detals-label">contact No :</label> +91
          <input type="text" name="contact_no" value=${
            data.contact_no
          }  maxlength="10" />
        </li>
        <li>
          <label class="row-detals-label">contact person :</label>
          <input type="text" name="contact_person" value=${
            data.contact_person
          } />
        </li>
        <li>
          <label class="row-detals-label">vendor name :</label>
          <input type="text" name="vendor_name" value=${JSON.stringify(
            data.vendor_name
          )} />
        </li>
        <li>
          <label class="row-detals-label">vendor code :</label>
          <input type="text" name="vendor_code" value=${data.vendor_code} />
        </li>
        <li>
          <label class="row-detals-label">Aadhar No :</label>
          <input type="text" name="aadhaar_no" value=${data.aadhaar_no} />
        </li>
        <li>
          <label class="row-detals-label">region :</label>
          <input type="text" name="region" value=${data.region} />
        </li>
        <li>
          <label class="row-detals-label">address :</label>
          <input type="text" name="address" value=${JSON.stringify(
            data.address
          )} />
        </li>
        <li>
          <label class="row-detals-label">pincode :</label>
          <input type="text" name="pincode" value=${data.pincode} />
        </li>
        <li>
          <label class="row-detals-label">founding year :</label>
          <input type="text" name="founding_year" value=${data.founding_year} />
        </li>
        <li>
          <label class="row-detals-label">rating :</label>
          <input type="text" name="rating" value=${data.rating} />
        </li>
        <li>
          <label class="row-detals-label">fleet type :</label>
          <input type="text" name="fleet_type" value=${data.fleet_type} />
        </li>
        <li>
          <label class="row-detals-label">fleet size :</label>
          <input type="text" name="fleet_size" value=${JSON.stringify(
            data.fleet_size
          )} />
        </li>
        <li>
          <label class="row-detals-label">web link :</label>
          <input type="text" name="web_link" value=${data.web_link} />
        </li>
        <li>
          <label class="row-detals-label">intro description :</label>
          <input type="text" name="intro_description" value=${
            data.intro_description
          } />
        </li>
        <li>
          <label class="row-detals-label">headline text :</label>
          <input type="text" name="headline_text" value=${data.headline_text} />
        </li>
        <li>
          <label class="row-detals-label">order base charge :</label>
          <input type="text" name="order_base_charge" value=${
            data.order_base_charge
          } />
        </li>
        <li>
          <label class="row-detals-label">per km charge :</label>
          <input type="text" name="per_km_charge" value=${data.per_km_charge} />
        </li>
        <li>
          <label class="row-detals-label">per kg charge :</label>
          <input type="text" name="per_kg_charge" value=${data.per_kg_charge} />
        </li>
        <li>
          <label class="row-detals-label">rental_base_charge :</label>
          <input type="text" name="rental_base_charge" value=${
            data.rental_base_charge
          } />
        </li>
        <li>
          <label class="row-detals-label">per_km_charge_rental :</label>
          <input type="text" name="per_km_charge_rental" value=${
            data.per_km_charge_rental
          } />
        </li>
        <li>
          <label class="row-detals-label">per_hr_charge_rental :</label>
          <input type="text" name="per_hr_charge_rental" value=${
            data.per_hr_charge_rental
          } />
        </li>
        <li>
          <label class="row-detals-label">vendor_account_locked :</label>
          <input type="text" name="vendor_account_locked" value=${
            data.vendor_account_locked
          } />
        </li>
        <li>
          <label class="row-detals-label">preferred_language :</label>
          <input type="text" name="preferred_language" value=${
            data.preferred_language
          } />
        </li>
        <li>
          <label class="row-detals-label">color_palette :</label>
          <input type="text" name="color_palette" value=${data.color_palette} />
        </li>
        <li>
          <label class="row-detals-label">GST_no :</label>
          <input type="text" name="GST_no" value=${data.GST_no} />
        </li>
        <li>
          <label class="row-detals-label">device_id :</label>
          <input type="text" name="device_id" value=${data.device_id} />
        </li>
        <li>
          <label class="row-detals-label">eKYC_status :</label>
          <input type="text" name="eKYC_status" value=${data.eKYC_status} />
        </li>
        <li>
          <label class="row-detals-label">pan_no :</label>
          <input type="text" name="pan_no" value=${data.pan_no} />
        </li>
        <li>
          <label class="row-detals-label">vendor_plan :</label>
          <input type="text" name="vendor_plan" value=${data.vendor_plan} />
        </li>
        <li>
          <label class="row-detals-label">email_id :</label>
          <input type="text" name="email_id" value=${data.email_id} />
        </li>
        <li>
          <label class="row-detals-label">device_id_2 :</label>
          <input type="text" name="device_id_2" value=${data.device_id_2} />
        </li>
      </ul>
      <ul class="detail-page-ul">
          <li>
            <label class="row-detals-label">logo_link :</label>
            <input  type="text" name="logo_link" value=${data.logo_link} /><br/><br/>
            <img src=${data.logo_link} width="200px" alt="Image not found"/>
            </li>
            <br/>
          <li>
            <label class="row-detals-label">aadhaar Card :</label><br/>
            <label class="row-detals-label">front:</label>
            <input type="text" name="aadhaar_no_front_image_link" value=${data.aadhaar_no_front_image_link} /><br/>
            <label class="row-detals-label">back:</label>
            <input type="text" name="aadhaar_no_front_image_link" value=${data.aadhaar_no_front_image_link} /><br/>
            <img src=${data.aadhaar_no_front_image_link} width="250px" alt="Image not found"/>
            <img src=${data.aadhaar_no_front_image_link} width="250px" alt="Image not found"/>
          </li>
          <br/>
          <li>
            <label class="row-detals-label">pan_no_image_front_link :</label>
            <input type="text" name="pan_no_image_front_link" value=${data.pan_no_image_front_link} /><br/>
            <img src=${data.pan_no_image_front_link} width="250px" alt="Image not found"/>
          </li>
          <br/>
          <li>
            <label class="row-detals-label">Badges :</label><br/>
            ${data.badges
              .map(
                (badge) => `
                <label class="label-badge"
                }"
                 >${badge}</label>
          `
              )
              .join("")}
          </li>
          <li>
          <label class="row-detals-label">delivery_agent_list :</label>
            <table class="delivery-agent-list-table">
              <thead>
                  <tr >
                    <td>Sr No.</td>
                    <td>Delivery Agent Id</td>
                    <td>Delivery Agent Name</td>
                  </tr>
                </thead>
                <tbody class="delivery-agent-list">
                ${data.delivery_agent_list
                  .map(
                    (agent, index) => `
                <tr>
                  <td>${index + 1}</td>
                  <td><input class="detail-page-ul-input" type="text" name="delivery_agent_id" value=${
                    agent.delivery_agent_id
                  } /></td>
                  <td><input class="detail-page-ul-input" type="text" name="delivery_agent_name" value=${
                    agent.delivery_agent_name
                  } /></td>
                </tr>
              `
                  )
                  .join("")}
              </tbody>
            </table>
          </li>
          <br/>

          <button type="submit">Save Changes</button>
      </ul>
    </form>
    </div>
    `;
  detailsdiv.style.display = "block";
  document.querySelector(".table").style.display = "none";
  const form = document.querySelector(".floww-details-form");
  form.addEventListener("submit", changeinput);
}

function changeinput(e) {
  const form = document.querySelector(".floww-details-form");
  e.preventDefault();
  const inputs = form.querySelectorAll("input");
  var values = {};

  for (const input of inputs) {
    if (input.name == "vendor_account_locked") {
      values[input.name] = input.value === "true" ? true : false;
    } else {
      if (
        input.name !== "delivery_agent_id" &&
        input.name !== "delivery_agent_name"
      ) {
        values[input.name] = input.value;
      }
    }
  }
  // <------ delivery_agent_list logic start--->
  const rows = document.querySelectorAll(".delivery-agent-list tr");
  const dataArray = [];

  rows.forEach((row) => {
    const [deliveryAgentId, deliveryAgentName] =
      row.querySelectorAll("td input");

    const obj = {
      delivery_agent_id: deliveryAgentId ? deliveryAgentId.value : "",
      delivery_agent_name: deliveryAgentName ? deliveryAgentName.value : "",
    };

    dataArray.push(obj);
  });
  // <------ delivery_agent_list logic ends--->

  values.deliveryAgentList = dataArray;
  console.log(values);
}

function goback() {
  var transporter_table = document.querySelector(".table");
  transporter_table.style.display = "block";
  let detailsdiv = document.querySelector(".floww-orderdetails");
  detailsdiv.innerHTML = "";
  document.querySelector(".floww-filter-list").style.display = "block";
}
