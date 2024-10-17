import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface InternalNotificationEmail {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const baseUrl = process.env.URL
  ? `https://${process.env.URL}`
  : "";

export const InternalNotificationEmail = ({
  name = "",
  email = "",
  subject = "",
  message = "",
}: InternalNotificationEmail) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission</Preview>
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
          <Container className="bg-white p-45">
            <Heading className="mb-8 text-center leading-8">
              New Contact Form Submission
            </Heading>

            <Section>
              <Row>
                <Text className="text-base">
                  <strong>Name:</strong> {name}
                </Text>
              </Row>
              <Row>
                <Text className="text-base">
                  <strong>Email:</strong> {email}
                </Text>
              </Row>
              <Row>
                <Text className="text-base">
                  <strong>Subject:</strong> {subject}
                </Text>
              </Row>
              <Row>
                <Column>
                  <Text className="text-base">
                    <strong>Message:</strong>
                  </Text>
                  <div
                    dangerouslySetInnerHTML={{ __html: message }}
                    style={{
                      whiteSpace: 'pre-wrap',
                      wordWrap: 'break-word',
                      fontFamily: 'Arial, sans-serif',
                      lineHeight: '1.5',
                    }}
                  />
                </Column>
              </Row>
            </Section>
          </Container>

          <Container className="mt-20">
            <Text className="text-center text-gray-400 mb-45">   
              © 2024 Melissa J Kipp. All rights reserved.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default InternalNotificationEmail;