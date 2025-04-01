const recentTransaction = [
  {
    img: "/assets/empty-wallet.png",
    title: "Figma",
    date: "August 20, 2022",
    price: 100,
    status: "Completed",
  },
  {
    img: "/assets/empty-wallet.png",
    title: "youtube",
    date: "August 20, 2022",
    price: 120,
    status: "Completed",
  },
  {
    img: "/assets/empty-wallet.png",
    title: "Spotify",
    date: "August 20, 2022",
    price: 15,
    status: "Completed",
  },
  {
    img: "/assets/empty-wallet.png",
    title: "Freepik",
    date: "August 20, 2022",
    price: 300,
    status: "Completed",
  },
];

const renderRecentTransaction = () => {
  const recentTransactionItems = document.getElementById(
    "recent-transaction-items"
  );

  console.log("here");

  recentTransactionItems.innerHTML = `
    ${recentTransaction
      .map((each) => {
        return `
        <div class="recent-transaction-item">
            <div class="recent-transaction-image">
                <img src="../assets/gallery.png" alt="" />
            </div>
            <div class="recent-transaction-details">
                <h1 class="recent-transaction-details-title text-md">${each.title}</h1>
                <h1 class="recent-transaction-details-price text-md">${each.price}</h1>
                <p class="recent-transaction-details-date text-xxs">${each.date}</p>
                <p class="text-green recent-transaction-details-status text-xxs">${each.status}</p>
            </div>
        </div>
        `;
      })
      .join("")}
    `;
};

export default renderRecentTransaction;
