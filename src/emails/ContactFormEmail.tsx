import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmail {
  firstName: string;
  email: string;
  steps?: {
    id: number;
    Description: React.ReactNode;
  }[];
  links?: string[];
}

const baseUrl = process.env.URL
  ? `https://${process.env.URL}`
  : "";

const PropDefaults: ContactFormEmail = {
  firstName: "Friend",
  email: "",
  steps: [
    {
      id: 1,
      Description: (
        <li className="mb-20" key={1}>
          <strong>Initial Consultation</strong>:{" "} I&apos;ll reach out to schedule a quick call to discuss your project goals, ideas, and any specific needs you have.
        </li>
      ),
    },
    {
      id: 2,
      Description: (
        <li className="mb-20" key={2}>
          <strong>Project Proposal</strong>:{" "} After our consultation, I&apos;ll send you a detailed proposal outlining the scope of work, timeline, and pricing.
        </li>
      ),
    },
    {
      id: 3,
      Description: (
        <li className="mb-20" key={3}>
          <strong>Agreement and Deposit</strong>:{" "} Once the proposal is approved, we&apos;ll sign an agreement and confirm the project with a deposit to get started.
        </li>
      ),
    },
    {
      id: 4,
      Description: (
        <li className="mb-20" key={4}>
          <strong>Design and Development: </strong>:{" "} I&apos;ll begin working on your project, keeping you updated with regular progress reports and drafts for your feedback.
        </li>
      ),
    },
    {
      id: 5,
      Description: (
        <li className="mb-20" key={5}>
          <strong>Revisions</strong>:{" "} Based on your feedback, I&apos;ll make any necessary adjustments to ensure the project aligns with your vision.
        </li>
      ),
    },
    {
      id: 6,
      Description: (
        <li className="mb-20" key={6}>
          <strong>Final Delivery</strong>:{" "} After all revisions are complete, I&apos;ll deliver the final product, ready for deployment or launch.
        </li>
      ),
    },
    {
      id: 7,
      Description: (
        <li className="mb-20" key={7}>
          <strong>Launch and Support</strong>:{" "} I&apos;ll assist with launching the project and provide any necessary post-launch support to ensure everything runs smoothly.
        </li>
      ),
    },
  ],
  links: ["Visit the forums", "Read the docs", "Contact an expert"],
};

export const NetlifyWelcomeEmail = ({
  firstName = PropDefaults.firstName,
  email = PropDefaults.email,
  steps = PropDefaults.steps,
  links = PropDefaults.links,
}: ContactFormEmail) => {
  return (
    <Html>
      <Head />
      <Preview>Thank You</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#81498A",
                offwhite: "#F7F2F8",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <Img
            src='/public/static/melissa-j-kipp.png'
            width="200"
            height="100"
            alt="Melissa J Kipp's logo"
            className="mx-auto my-20"
          />
          <Container className="bg-white p-45">
            <Heading className="text-center my-0 leading-8">
              Hello {firstName}!
            </Heading>

            <Section>
              <Row>
                <Text className="text-base">
                  We're excited to help you build, launch, and grow with modern solutions. We will contacting you at {email}.
                </Text>  

                <Text className="text-base">What to expect next:</Text>
              </Row>
            </Section>

            <ul>{steps?.map(({ Description }) => Description)}</ul>

            <Section className="text-center">
              <Button className="bg-brand text-white font-bold tracking-wider rounded-lg py-3 px-[18px]">
                My portfolio
              </Button>
            </Section>

            <Section className="mt-45">
              <Row>
                {links?.map((link) => (
                  <Column key={link}>
                    <Link className="text-black underline font-bold">
                      {link}
                    </Link>{" "}
                    <span className="text-green-500">→</span>
                  </Column>
                ))}
              </Row>
            </Section>
          </Container>

          <Container className="mt-20">
            <Section>
              <Row>
                <Column className="text-right px-20">
                  <Link>Unsubscribe</Link>
                </Column>
                <Column className="text-left">
                  <Link>Manage Preferences</Link>
                </Column>
              </Row>
            </Section>
            <Text className="text-center text-gray-400 mb-45">
              © 2024 Melissa J Kipp. All rights reserved.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NetlifyWelcomeEmail;
