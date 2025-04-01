const savingPlans = [
  {
    title: "Bali vacation",
    target: "August 25, 2022",
    firstNumber: 195021,
    secondNumber: 4000,
    progressPercentage: 48,
  },
  {
    title: "New Gadgets",
    target: "August 25, 2022",
    firstNumber: 79021,
    secondNumber: 1000,
    progressPercentage: 79,
  },
  {
    title: "Charity",
    target: "August 25, 2022",
    firstNumber: 32111,
    secondNumber: 100,
    progressPercentage: 32,
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
