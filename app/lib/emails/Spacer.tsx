import { Column, Row } from "@react-email/components";
import * as React from "react";

export default function Spacer({ height }: { height: number }) {
  return (
    <Row>
      <Column height={height}></Column>
    </Row>
  );
}
