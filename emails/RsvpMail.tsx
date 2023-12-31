import * as React from "react";
import {
	Body,
	Button,
	Container,
	Column,
	Head,
	Heading,
	Html,
	Img,
	Row,
	Section,
	Text,
	Tailwind,
	Link,
	Font,
} from "@react-email/components";
import Spacer from "./Spacer";
import { Guest } from "@prisma/client";
import PalmTrees from "./palmTrees.svg";

interface Props {
	guests: Guest[];
}

export default function rsvpMail({ guests }: Props) {
	return (
		<Html lang="en">
			<Head>
				<Font
					fontFamily="Roboto"
					fallbackFontFamily="Verdana"
					webFont={{
						url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
						format: "woff2",
					}}
					fontWeight={400}
					fontStyle="normal"
				/>
			</Head>
			<Tailwind>
				<Body>
					<Container
						className="w-full min-w-full"
						style={{
							backgroundColor: "#98A28F",
							backgroundSize: "cover",
							fontFamily: "Roboto, geneva, sans-serif",
							padding: "20px",
						}}
					>
						<Section className="text-center max-w-[425px] min-w-[300px] bg-white rounded-xl shadow-xl my-20">
							<Row>
								<Column align="right" />
								<Column align="center" width="90%">
									<Spacer height={15} />
									<Img
										alt="Palm Trees"
										src={"https://nd-2024.s3.ca-central-1.amazonaws.com/images/palmTrees.png"}
										width={50}
										height={50}
									/>
									<Heading className="text-[22px] font-bold text-[#0C1335]">
										You have submitted the following {guests.length > 1 ? "RSVPs" : "RSVP"}
									</Heading>
									<Text>
										{guests.map((guest) => (
											<Text key={guest.name} className="text-[#60678E] text-[14px]">
												{guest.name} - {guest.rsvp ? "Confirmed" : "Declined"}
											</Text>
										))}
									</Text>
									{/* <Spacer height={5} /> */}
									<Text className="text-[#60678E] text-[10px]">
										If you'd like to change your response, you can do so before March 1, 2024
									</Text>
								</Column>
								<Column align="left" />
							</Row>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
