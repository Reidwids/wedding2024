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
} from "@react-email/components";
import Spacer from "./Spacer";

export default function AnalysisCompleteMail(viewResultsLink: string) {
	return (
		<Html lang="en">
			<Head />
			<Tailwind>
				<Body className="w-full min-w-full">
					<Text>Hello Thanks for the email!!!!!</Text>
					{/* <Container
						className="w-full min-w-full"
						style={{
							backgroundImage:
								"url(https://dayhoff-storage-public.s3.ca-central-1.amazonaws.com/sendgrid-media/invite-user/Dayhoff+%E2%80%93+background.png)",
							backgroundSize: "cover",
							fontFamily: "roboto, geneva, sans-serif",
						}}
					>
						<Section className="text-center w-60% max-w-[425px] min-w-[300px] bg-white rounded-xl shadow-xl">
							<Row>
								<Column align="right" />
								<Column align="center" width="90%">
									<Spacer height={20} />
									<Section className="w-full text-center">
										<Row>
											<Column align="left"></Column>
											<Column align="center">
												<Img src="https://dayhoff-storage-public.s3.ca-central-1.amazonaws.com/sendgrid-media/clock48.png" />
											</Column>
											<Column align="right"></Column>
										</Row>
									</Section>
									<Heading className="text-[22px] font-bold text-[#0C1335]">Your analysis is complete!</Heading>
									<Text className="text-[#60678E] text-[14px]">
										Your analysis has finished executing and your results are now available. Please click below to view your
										results.
									</Text>
									<Spacer height={10} />
									<Button
										href={viewResultsLink}
										target="_blank"
										style={{ border: "16px solid #FFF" }}
										className="text-white rounded-xl bg-[#2F4792] text-[16px] border-16 border-transparent"
									>
										View Results
									</Button>
									<Spacer height={20} />
								</Column>
								<Column align="left" />
							</Row>
						</Section>
					</Container> */}
				</Body>
			</Tailwind>
		</Html>
	);
}
