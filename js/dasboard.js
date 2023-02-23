// static condition
document.getElementById("floww-transport-div").style.display = "block";
document.getElementById("floww-order-div").style.display = "none";
document.getElementById("floww-agent-div").style.display = "none";
function selectTab(tabIndex) {
  //Show the Selected Tab
  if (tabIndex == 1) {
    document.getElementById("floww-transport-div").style.display = "block";
    document.getElementById("floww-order-div").style.display = "none";
    document.getElementById("floww-agent-div").style.display = "none";
  }
  if (tabIndex == 2) {
    document.getElementById("floww-transport-div").style.display = "none";
    document.getElementById("floww-order-div").style.display = "block";
    document.getElementById("floww-agent-div").style.display = "none";
  }
  if (tabIndex == 3) {
    document.getElementById("floww-transport-div").style.display = "none";
    document.getElementById("floww-order-div").style.display = "none";
    document.getElementById("floww-agent-div").style.display = "block";
  }
}
