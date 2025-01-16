import { useState } from "react";

export default function DonatePage() {
  const accountNumber = "2042017992";
  const [copyStatus, setCopyStatus] = useState("");

  const handleCopy = () => {
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        setCopyStatus("Copied!");
        setTimeout(() => setCopyStatus(""), 2000); // Clear status after 2 seconds
      })
      .catch(() => setCopyStatus("Failed to copy!"));
  };

  return (
    <section className="donate">
      <div className="container">
        <h1 className="donate__header">Select method of Payment</h1>
        <a
          className="donate__card flex item-center"
          href="https://paystack.com/pay/kasham"
          target="_blank"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.25 5.25H13.75C14.0261 5.25 14.25 5.47386 14.25 5.75V6.75H3.75V5.75C3.75 5.47386 3.97386 5.25 4.25 5.25ZM3.75 8.25V12.25C3.75 12.5261 3.97386 12.75 4.25 12.75H13.75C14.0261 12.75 14.25 12.5261 14.25 12.25V8.25H3.75ZM2.25 5.75C2.25 4.64543 3.14543 3.75 4.25 3.75H13.75C14.8546 3.75 15.75 4.64543 15.75 5.75V12.25C15.75 13.3546 14.8546 14.25 13.75 14.25H4.25C3.14543 14.25 2.25 13.3546 2.25 12.25V5.75Z"
              fill="#136F22"
            />
          </svg>
          <span>Donate with Credit card</span>
        </a>
        <h3 className="donate__sub-header"> Or donate via Bank transfer</h3>
        <div className="donate__transfer-info">
          <div>
            <p className="donate__transfer-name">Bank Name</p>
            <p className="donate__transfer-details">WEMA Bank</p>
          </div>
          <div>
            <p className="donate__transfer-name">Account Name</p>
            <p className="donate__transfer-details">
              KASHAM GIRLS WOMEN YOUTH AND COMMUNITY DEVELOPMENT NETWORK
            </p>
          </div>
          <div className="flex justify-item align-bottom">
            <div>
              <p className="donate__transfer-name">Account Number</p>
              <p className="donate__transfer-details">{accountNumber}</p>
            </div>
            <div
              onClick={handleCopy}
              className="donate__copybtn flex align-center"
            >
              {copyStatus && <span>{copyStatus}</span>}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4V16C8 16.5304 8.21071 17.0391 8.58579 17.4142C8.96086 17.7893 9.46957 18 10 18H18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16V7.242C20 6.97556 19.9467 6.71181 19.8433 6.46624C19.7399 6.22068 19.5885 5.99824 19.398 5.812L16.083 2.57C15.7094 2.20466 15.2076 2.00007 14.685 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 18V20C16 20.5304 15.7893 21.0391 15.4142 21.4142C15.0391 21.7893 14.5304 22 14 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7H8"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
