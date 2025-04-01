const overviewData = [
  {
    percentage: 12,
    image: "/assets/empty-wallet.png",
    subImage: "/assets/gree-export.png",
    heading: "Your Balance",
    description: "This is product 1",
    price: 28891.138,
    quantity: 1,
  },
  {
    percentage: 12,
    image: "/assets/save-2.png",
    subImage: "/assets/pink-export.png",
    heading: "Saving",
    description: "This is product 2",
    price: 1050.44,
    quantity: 1,
  },
  {
    percentage: 12,
    image: "/assets/direct-up.png",
    subImage: "/assets/orange-export.png",
    heading: "Expenses",
    description: "This is product 3",
    price: 200.31,
    quantity: 1,
  },
  {
    percentage: 12,
    image: "/assets/direct-down.png",
    subImage: "/assets/blue-export.png",
    heading: "Incomes",
    description: "This is product 4",
    price: 21121.0,
    quantity: 1,
  },
];

function renderOverViewData() {
  const overviewItems = document.getElementById("overview-items");
  console.log("overviewItems", overviewItems);

  overviewItems.innerHTML += `
    ${overviewData
      .map((each, index) => {
        return `
          <div class="overview-item radius-lg ${
            index == 0
              ? "bg-blue text-white"
              : "bg-white text-primary light-border"
          }">
              <div class="overview-item-header">
                <div class="overview-item-image light-border">
                  <img src="${each.image}" alt="someimage" />
                </div>
                <div class="overview-item-details">
                  <h2 class="overview-item-heading text-md">${each.heading}</h2>
                  <p class="overview-item-description text-xxs">
                   <img src="${each.subImage}" alt="ho ra ?" />
      ${Math.floor(Math.random() * 100)}% compared with last month
                  
                  </p>
                </div>
              </div>
              <hr />
              <div class="overview-item-footer">
                <h1 class="overview-item-footer-price font-semibold text-lg">$${each.price.toLocaleString()}</h1>
                <section class="overview-item-footer-link">
      ${
        index == 0
          ? `<img src="../assets/arrow-right - Copy.png" alt="" />`
          : `<img src="../assets/arrow-right.png" alt="" />`
      }
                  
                </section>
              </div>
            </div>
        `;
      })
      .join("")}
    `;
}
{
  /* <span class="material-symbols-outlined"> arrow_forward </span>; */
}

export default renderOverViewData;
