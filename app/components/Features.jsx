// "use client";
// import { useState } from "react";
// import { FaHome, FaMoneyBill, FaPiggyBank, FaChartLine, FaHandHoldingUsd, FaShieldAlt, FaGift } from "react-icons/fa";

// const features = [
//   { name: "Home", icon: FaHome, content: "Your personalized dashboard." },
//   { name: "Pay", icon: FaMoneyBill, content: "Fast and secure payments." },
//   { name: "Save", icon: FaPiggyBank, content: "Smart savings options." },
//   { name: "Invest", icon: FaChartLine, content: "Grow your wealth wisely." },
//   { name: "Borrow", icon: FaHandHoldingUsd, content: "Easy loans with low interest." },
//   { name: "Insure", icon: FaShieldAlt, content: "Protect what matters most." },
//   { name: "Offers", icon: FaGift, content: "Exclusive offers for you." },
// ];

// const Features = () => {
//   const [active, setActive] = useState(null);

//   return (
//     <section id="features" className="py-20 px-8 bg-gray-50 text-center">
//       <h2 className="text-4xl font-bold mb-12">Our Services</h2>
//       <div className="flex flex-wrap justify-center gap-6">
//         {features.map((feature, idx) => {
//           const Icon = feature.icon;
//           return (
//             <div
//               key={idx}
//               className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg cursor-pointer hover:scale-105 transition-transform"
//               onMouseEnter={() => setActive(idx)}
//               onMouseLeave={() => setActive(null)}
//             >
//               <Icon className="text-4xl mb-2 text-blue-500" />
//               <span className="font-semibold">{feature.name}</span>
//               {active === idx && (
//                 <p className="mt-2 text-gray-600 text-sm">{feature.content}</p>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Features;




"use client";
import { useState } from "react";
import {
  FaHome,
  FaMoneyBill,
  FaPiggyBank,
  FaChartLine,
  FaHandHoldingUsd,
  FaShieldAlt,
  FaGift,
  FaChevronRight,
  FaChevronDown,
  FaWallet,
  FaCreditCard,
  FaReceipt,
  FaMobileAlt,
  FaUniversity,
  FaCoins,
  FaBuilding,
  FaUserTie,
  FaHeartbeat,
  FaCar,
  FaHandsHelping,
  FaShoppingCart,
} from "react-icons/fa";

/* ---------- FEATURES LIST ---------- */
const features = [
  { name: "Home", icon: FaHome, content: "Your personalized dashboard." },
  { name: "Pay", icon: FaMoneyBill, content: "Fast and secure payments." },
  { name: "Save", icon: FaPiggyBank, content: "Smart savings options." },
  { name: "Invest", icon: FaChartLine, content: "Grow your wealth wisely." },
  { name: "Borrow", icon: FaHandHoldingUsd, content: "Easy loans with low interest." },
  { name: "Insure", icon: FaShieldAlt, content: "Protect what matters most." },
  { name: "Offers", icon: FaGift, content: "Exclusive offers for you." },
];

/* ---------- PAY OPTIONS ---------- */
const payOptions = [
  {
    name: "Money Transfer",
    icon: FaWallet,
    subOptions: [
      "UPI",
      "IMPS",
      "RTGS",
      "NEFT",
      "RemitNow Foreign Outward Remittance",
      "Remittance",
      "Religious Offering's & Donation",
      "Rupay/Visa CardPay",
      "Forex Services for Students",
      "Pay Overseas Education Fees with Flywire",
      "ESOP Remittance",
    ],
  },
  {
    name: "Cards",
    icon: FaCreditCard,
    subOptions: [
      "Credit Cards",
      "Debit Cards",
      "Prepaid Cards",
      "Millennia Cards",
      "Commercial Credit Cards",
      "Business Credit Cards",
      "Loan on Credit Card",
      "Pixel Credit Card",
    ],
  },
  {
    name: "Bill Payments",
    icon: FaReceipt,
    subOptions: [
      "Smart Pay",
      "Merchant SI",
      "Biller Categories",
      "Electricity Bill Payment",
      "Mobile Post-paid",
      "Insurance Premium",
      "Telephone - Landline",
      "Gas",
      "Water",
      "Magazine Subscriptions",
      "HDFC Bank Credit Card Bill Payment",
      "Rent Payment",
      "Club Membership",
      "Mutual Fund Installment",
      "Visa Bill Pay",
    ],
  },
  {
    name: "Recharge",
    icon: FaMobileAlt,
    subOptions: ["Broadband & Datacard", "Mobile Pre-paid Recharge", "DTH Recharge"],
  },
];

/* ---------- SAVE OPTIONS ---------- */
const saveOptions = [
  {
    name: "Accounts",
    icon: FaUniversity,
    subOptions: [
      "Savings Accounts",
      "Salary Account",
      "Current Account",
      "Rural Accounts",
      "PPF Account Online",
      "Garv Pension Saving Account",
      "Savings Account Interest Rate",
      "Merchant Services",
    ],
  },
  {
    name: "Deposits",
    icon: FaCoins,
    subOptions: [
      "Fixed Deposit",
      "Non Withdrawal Deposits",
      "Fixed Deposit Interest Rate",
      "Recurring Deposit",
      "My Passion Fund",
    ],
  },
  {
    name: "High Networth Banking",
    icon: FaUserTie,
    subOptions: [
      "Broker Services",
      "Wealth",
      "Imperia",
      "Preferred",
      "Classic",
      "Vishesh",
      "Prime",
    ],
  },
];

/* ---------- INVEST OPTIONS ---------- */
const investOptions = [
  {
    name: "Demat",
    icon: FaBuilding,
    subOptions: [
      "Open Demat Account",
      "Corporate Demat Accounts",
      "Already have Demat & Trading Account",
      "HDFC Sky",
    ],
  },
  {
    name: "Bonds & Securities",
    icon: FaCoins,
    subOptions: [
      "Savings Bonds",
      "Sec-54 EC Capital Gains Bonds",
      "Sovereign Gold Bonds",
    ],
  },
  {
    name: "IPO - Application",
    icon: FaReceipt,
    subOptions: [
      "Recommended Portfolio Equity & Debt Mutual Funds",
      "HDFC Bank Research Reports",
    ],
  },
];

/* ---------- BORROW OPTIONS ---------- */
const borrowOptions = [
  {
    name: "Popular Loans",
    icon: FaWallet,
    subOptions: [
      "Personal Loan",
      "Paperless Personal Loan",
      "Home Loan",
      "Business Loan",
      "Doctor Loan",
      "New Car Loan",
      "EV Car Loan",
      "Two Wheeler Loan",
      "EV Bike Loan",
      "Super Bike Loan",
      "Educational Loan",
      "Pre-owned Car Loan",
      "EasyEMI",
      "Flexipay: Buy Now, Pay Later",
    ],
  },
  {
    name: "Loan Against Assets",
    icon: FaCreditCard,
    subOptions: [
      "Loan on Credit Card",
      "SmartEMI",
      "Gold Loan",
      "Loan Against Securities",
      "Digital Loan Against Mutual Funds",
      "Loan Against Property",
      "Loan Against Car",
    ],
  },
  {
    name: "Other Loans",
    icon: FaUniversity,
    subOptions: [
      "Jansamarth Portal",
      "Emergency Credit Line Facility",
      "Loan for Professionals",
      "Government Sponsored Programs",
      "PM Mudra Yojana",
      "Stand Up India Scheme",
      "Manage Your Loan Account",
      "Sustainable Livelihood Init",
    ],
  },
  {
    name: "Credit Cards",
    icon: FaCreditCard,
    subOptions: ["Loan Repayment"],
  },
];

/* ---------- INSURE OPTIONS ---------- */
const insureOptions = [
  {
    name: "Life",
    icon: FaHeartbeat,
    subOptions: [
      "Protect Life (Term)",
      "Secure Children's Future",
      "Protect Life & Grow Wealth",
      "Protect Life & Plan for Retirement",
    ],
  },
  {
    name: "Health & Accident",
    icon: FaHandsHelping,
    subOptions: ["Mediclaim", "Critical Illness", "Personal Accident", "Super Top-up (Health)"],
  },
  {
    name: "Vehicle",
    icon: FaCar,
    subOptions: ["Private Car Insurance", "Two Wheeler Insurance", "Commercial Vehicle Insurance"],
  },
  {
    name: "Social Security Schemes",
    icon: FaUniversity,
    subOptions: [
      "Atal Pension Yojana",
      "Pradhan Mantri Jeevan Jyoti Bima Yojana",
      "Pradhan Mantri Suraksha Bima Yojana",
    ],
  },
];

/* ---------- OFFERS OPTIONS ---------- */
const offersOptions = [
  {
    name: "SmartBUY",
    icon: FaShoppingCart,
    subOptions: [
      "Compare & Fly",
      "Compare & Shop",
      "Deals & Offers",
      "SmartBUY Hotels",
      "Dining Offers",
    ],
  },
];

/* ---------- MAIN COMPONENT ---------- */
const Features = () => {
  const [active, setActive] = useState(null);
  const [openMenu, setOpenMenu] = useState({});

  const toggleMainOption = (cardIdx, optionIdx) => {
    setOpenMenu((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (key.startsWith(cardIdx)) newState[key] = false;
      });
      newState[`${cardIdx}-${optionIdx}`] = !prev[`${cardIdx}-${optionIdx}`];
      return newState;
    });
  };

  const renderNestedMenu = (options, idx) => (
    <div className="mt-4 text-left w-full">
      {options.map((option, i) => (
        <div key={i} className="mb-2">
          <div
            className="flex justify-between items-center p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
            onClick={(e) => {
              e.stopPropagation();
              toggleMainOption(idx, i);
            }}
          >
            <div className="flex items-center gap-2">
              <option.icon className="text-blue-500" />
              <span className="font-medium">{option.name}</span>
            </div>
            {openMenu[`${idx}-${i}`] ? <FaChevronDown /> : <FaChevronRight />}
          </div>
          {openMenu[`${idx}-${i}`] && (
            <ul className="ml-8 mt-2 space-y-1 text-sm text-gray-700">
              {option.subOptions.map((sub, j) => (
                <li key={j} className="p-1 hover:bg-gray-50 cursor-pointer rounded">
                  {sub}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );

  const getOptions = (name) => {
    switch (name) {
      case "Pay":
        return payOptions;
      case "Save":
        return saveOptions;
      case "Invest":
        return investOptions;
      case "Borrow":
        return borrowOptions;
      case "Insure":
        return insureOptions;
      case "Offers":
        return offersOptions;
      default:
        return [];
    }
  };

  return (
    <section id="features" className="py-20 px-8 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {features.map((feature, idx) => {
          const Icon = feature.icon;

          if (feature.name === "Home") {
            return (
              <a
                key={idx}
                href="#hero"
                className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg cursor-pointer hover:scale-105 transition-transform w-72 h-64"
              >
                <Icon className="text-4xl mb-2 text-blue-500" />
                <span className="font-semibold">{feature.name}</span>
                <p className="mt-2 text-gray-600 text-sm">{feature.content}</p>
              </a>
            );
          }

          return (
            <Card
              key={idx}
              idx={idx}
              Icon={Icon}
              feature={feature}
              options={getOptions(feature.name)}
              active={active}
              setActive={setActive}
              renderNestedMenu={renderNestedMenu}
            />
          );
        })}
      </div>
    </section>
  );
};

/* ---------- REUSABLE CARD ---------- */
const Card = ({ idx, Icon, feature, options, active, setActive, renderNestedMenu }) => {
  const isActive = active === idx;

  return (
    <div
      className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg cursor-pointer hover:scale-105 transition-transform w-72 h-auto"
      onClick={() => setActive(isActive ? null : idx)}
    >
      <Icon className="text-4xl mb-2 text-blue-500" />
      <span className="font-semibold">{feature.name}</span>
      {isActive && renderNestedMenu(options, idx)}
    </div>
  );
};

export default Features;
