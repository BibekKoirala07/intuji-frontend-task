const savingPlans = [
  {
    title: "Amazon Purchase",
    target: "August 22, 2022",
    firstNumber: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
    secondNumber: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
    progressPercentage: Math.floor(Math.random() * 100),
  },
  {
    title: "Netflix Subscription",
    target: "September 10, 2022",
    firstNumber: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
    secondNumber: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
    progressPercentage: Math.floor(Math.random() * 100),
  },
  {
    title: "Gym Membership",
    target: "October 5, 2022",
    firstNumber: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
    secondNumber: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
    progressPercentage: Math.floor(Math.random() * 100),
  },
];

const renderSavingPlans = () => {
  const savingPlansItems = document.getElementById("saving-plan-items");

  savingPlansItems.innerHTML = `
    ${savingPlans
      .map((each, index) => {
        return `
      <div class="saving-plan-item">
        <div class="saving-plan-header">
          <h2 class="text-primary font-medium text-sm">${each.title}</h2>
          <p class="font-light text-xxs">Target: ${each.target}</p>
        </div>
        <div class="saving-plan-details">
          <h1 class="text-primary text-base font-semibold">$${each.firstNumber.toLocaleString()} <span class="font-light text-xxs"> / $ ${each.secondNumber.toLocaleString()}</span></h1>
          <p class="font-semibold text-md ${
            index == 0 ? "text-blue" : index == 1 ? "text-yellow" : "text-green"
          }">${each.progressPercentage.toFixed(0)}%</p>
        </div>
        <div class="saving-plan-progress-bar-container">
          <div class="saving-plan-progress-bar ${
            index == 0 ? "bg-blue" : index == 1 ? "bg-yellow" : "bg-green"
          }" style="width: ${each.progressPercentage}%"></div>
        </div>
      </div>
        `;
      })
      .join("")}
    `;
};

export default renderSavingPlans;
