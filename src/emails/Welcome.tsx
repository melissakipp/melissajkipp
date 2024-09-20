import { 
  Button, 
  Container,
  Html,
  Head,
  Heading, 
  Hr,
  Img,
  Tailwind,
  Text
} from "@react-email/components";
import * as React from "react";

export default function Welcome() {
  return (
    <>
    <Head>
        <title>My email title</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
    </Head>
    <Html lang="en" dir="ltr" style={{fontFamily: "'Montserrat', sans-serif", fontOpticalSizing: "auto"}}>
      <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              purple: "#81498A",
              litePurple: "#F7F2F8",
              white: "#F9F9F9",
              black: "#222222"
            },
          },
        },
      }}
      >
      <Container className="p-4">
        <Heading className="py-3 bg-purple rounded-lg text-center text-litePurple" as="h2">Welcome</Heading>
        <Hr />
        <Img src="/public/images/desert-rabbit_3721_by-melissajkipp.jpg" alt="Cat" width="300" height="300" />
        <Text>
          Welcome to my email template. This is a simple email template that you can use to send to your subscribers. 
          You can customize this template to fit your needs. 
          You can add more components to this template by importing them from the @react-email/components library.
          You can also add your own custom components.
        </Text>
        <Button
          href="https://melissajkipp.com"
          style={{
            margin: "20px 0",
            padding: "12px 20px", 
            fontWeight: "bold", 
            textDecoration: "none" 
          }}
          className="bg-purple rounded-xl text-white"
          target="_blank"
        >
          Click me
        </Button>
      </Container>
      </Tailwind>
    </Html>
    </>
  );
}
