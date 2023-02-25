axios
  .get("https://backend.gofloww.co/api/v1/insight-apis/get-list-of-vendors/")
  .then(function (response) {
    let responseData = JSON.parse(response.data);
    console.log(responseData.vendorList);
    addTransporterDetails(responseData.vendorList);
  })
  .catch(function (error) {
    console.log(error);
  });

function addTransporterDetails(vendorList_data) {
  var transporter_table_body = document.querySelector(
    ".floww-transport-table-row"
  );
  transporter_table_body.innerHTML = `${vendorList_data
    .map(
      (e) => `
        <tr>
         <td><l$ class="${
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
  console.log(vendorList[0].deliveryAgentList[0].delivery_agent_id);
}

function showDetails() {
  let detailsdiv = document.querySelector(".floww-orderdetails");

  let detailsdatastructure = {
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
    fleet_size: "More than 10",
    badges: [],
    web_link: "N/A",
    intro_description: "text0",
    headline_text: "text0",
    logo_link: "logo0",
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
      "https://firebasestorage.googleapis.com/v0/b/flowwpublic.appspot.com/o/aadhaarPlaceholder.jpg?alt=media&token=674aa365-120d-4934-8b91-46196ee20660",
    delivery_agent_list: [
      {
        delivery_agent_id: "AGE000018",

        delivery_agent_name: "unknown",
      },
    ],
    device_id: "N/A",
    eKYC_status: "incomplete",
    pan_no: "N/A",
    pan_no_image_back_link:
      "https://firebasestorage.googleapis.com/v0/b/flowwpublic.appspot.com/o/aadhaarPlaceholder.jpg?alt=media&token=674aa365-120d-4934-8b91-46196ee20660",
    pan_no_image_front_link:
      "https://firebasestorage.googleapis.com/v0/b/flowwpublic.appspot.com/o/aadhaarPlaceholder.jpg?alt=media&token=674aa365-120d-4934-8b91-46196ee20660",
    vendor_plan: "basic",
    email_id: "N/A",
    device_id_2: "N/A",
  };

  detailsdiv.innerHTML = `
    <div>
    <h3>Transporter Details</h3>
    <button onclick="goback()">
    Go back to Table
    </button>
    </div>
    <div class="flow-table-details-div">
    <div>
    <ul>
    <li>
    <span>Vendor ID :</span> ${detailsdatastructure.vendor_id}
    </li>
    <li>
    <span>Contact No :</span> ${detailsdatastructure.contact_no}
    </li>
    <li>
    <span>Contact Person :</span> ${detailsdatastructure.contact_person}
    </li>
    <li>
    <span>Vendor Name :</span> ${detailsdatastructure.vendor_name}
    </li>
    <li>
    <span>Vendor Code :</span>${detailsdatastructure.vendor_code}
    </li>
    <li>
    <span>Aadhaar No :</span> ${detailsdatastructure.aadhaar_no}
    </li>
    <li><span>Region :</span> ${detailsdatastructure.region}</li>
    <li>
    <span>Address :</span> ${detailsdatastructure.address}
    </li>
    <li><span>Pincode :</span> ${detailsdatastructure.pincode}</li>
    <li><span>Founding Year :</span> ${detailsdatastructure.founding_year}</li>
    <li><span>Rating :</span> ${detailsdatastructure.rating}</li>
    <li><span>Fleet Type :</span> ${detailsdatastructure.fleet_type}</li>
    <li>
    <span>Fleet Size :</span> ${detailsdatastructure.fleet_size}
    </li>
    <li><span>Badges :</span> ${detailsdatastructure.badges} </li>
    <li><span>Web Link :</span> ${detailsdatastructure.web_link}</li>
    <li>
    <span>Intro Description :</span> ${detailsdatastructure.intro_description}
    </li>
    <li>
    <span>Headline Text :</span> ${detailsdatastructure.headline_text}
    </li>
    <li><span>Logo Link:</span> ${detailsdatastructure.logo_link}</li>
    <li>
    <span>Order Base Charge :</span> ${detailsdatastructure.order_base_charge}
    </li>
    <li><span>Per KM Charge :</span> ${detailsdatastructure.per_km_charge}</li>
    <li><span>Per KG Charge :</span> ${detailsdatastructure.per_kg_charge}</li>
    <li>
    <span>Rental Base Charge :</span> ${detailsdatastructure.rental_base_charge}
    </li>
    <li>
    <span>Per KM Charge Rental :</span> ${detailsdatastructure.per_km_charge_rental}
    </li>
    <li>
    <span>Per HR Charge Rental :</span> ${detailsdatastructure.per_hr_charge_rental}
    </li>
    <li>
    <span>Vendor Account Locked :</span>${detailsdatastructure.vendor_account_locked}
    </li>
    <li>
    <span>Preferred Language :</span> ${detailsdatastructure.preferred_language}
    </li>
    <li>
    <span>Color Palette :</span> ${detailsdatastructure.color_palette}
    </li>
    <li><span>GST No :</span> ${detailsdatastructure.GST_no}</li>
    <li>
    <span>Delivery Agent List :</span>
    <ul>
    <li>
    <span>Delivery Agent ID :</span>${detailsdatastructure.delivery_agent_list[0].delivery_agent_id}
    </li>
    <li>
    <span>Delivery Agent Name :</span>${detailsdatastructure.delivery_agent_list[0].delivery_agent_name}
    </li>
    </ul>
    </li>
    <li><span>Device ID :</span> ${detailsdatastructure.device_id}</li>
    <li>
    <span>eKYC Status :</span> ${detailsdatastructure.eKYC_status}
    </li>
    <li><span>PAN No :</span> ${detailsdatastructure.pan_no}</li>
    <li><span>Vendor Plan :</span> ${detailsdatastructure.vendorPlan}</li>
    <li><span>Email ID :</span> ${detailsdatastructure.email_id}</li>
    <li><span>Device ID 2 :</span>: ${detailsdatastructure.device_id_2}</li>
    </ul>
    </div>
    <div>
    <ul>
    <li>
    <span>Aadhaar No Front Image Link:</span
    ><img
    src="https://adarshc.com/index/ent/document/default/aadhar.jpg"
    />
    </li>
    <br />
    <li>
    <span>PAN No Image Back Link:</span>
    <img
    src="https://adarshc.com/index/ent/document/default/pan.jpg"
    />
    </li>
    </ul>
    </div>
    </div>
    `;
  detailsdiv.style.display = "block";
  document.querySelector(".table").style.display = "none";
}

function goback() {
  var transporter_table = document.querySelector(".table");
  transporter_table.style.display = "block";
  let detailsdiv = document.querySelector(".floww-orderdetails");
  detailsdiv.innerHTML = "";
}
