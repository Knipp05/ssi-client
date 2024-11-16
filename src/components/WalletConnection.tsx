import React from "react";
import { QRCodeSVG } from "qrcode.react";

export default function WalletConnection() {
  const vdAgentUrl = "http://192.168.178.69:3001/issue-credential";
  return (
    <div>
      <h2>QR-Code scannen, um die Wallet zu verbinden!</h2>
      <QRCodeSVG value={vdAgentUrl} size={128} />
    </div>
  );
}
