import { Link, Box, Text, Heading, GridItem } from '@chakra-ui/react';
import Head from 'next/head';
import { Grid } from '../components/Grid';
import { Experience } from '../components/Experience';
import Cursor from '../components/Cursor';
import { Avatar } from '../components/Avatar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Yusron Hanan - Software Engineer (Back End)</title>
      </Head>
      <Cursor />

      <Box py="115px" px={4} maxWidth={700} mx="auto">
        <Grid
          fluid
          templateColumns="repeat(4, 1fr)"
          mb={10}
          alignItems="center"
        >
          <GridItem colSpan={1}>
            <Avatar />
          </GridItem>
          <GridItem colSpan={3}>
            <Box>
              <Heading as="h1" size="lg">
                Yusron Hanan
              </Heading>
              <Text>Software Engineer-focused Back End</Text>
              <Link
                color="white"
                opacity={0.5}
                href="mailto:yusronzain@gmail.com"
              >
                yusronzain@gmail.com
              </Link>
            </Box>
          </GridItem>
        </Grid>
        <Box mb={14}>
          <Heading as="h2" size="md" mb={2}>
            About
          </Heading>
          <Text>
            A software engineer and practitioner with extraordinary skills in
            engineering management, database design, project planning, and
            programming. I have 4-5 years of experience in the professional
            area. I helped my employer to get their product to work well and
            sustain. My portfolios are used in various industries, such as
            EduTech, Chat Platform, Telemedicine, and Finance. I'm also actively
            writing on my Medium platform, with 100+ claps and continuously
            growing.
          </Text>
        </Box>
        <Box mb={14}>
          <Heading as="h2" size="md" mb={10}>
            Work Experience
          </Heading>

          <Experience
            href="https://reku.id/"
            side="Oct 2022 - present"
            title="Software Engineer -focused Back End - Reku"
            desc="Building the leading Indonesian crypto exchange. Joining the team as a back end engineer, I'm responsible for building the core product, such as the trading engine, gamification features, notification system, etc."
            stack="Go • OpenTelemetry • gRPC • Kafka • PHP • Redis • MySQL • Docker • Database Design"
          />
          <Experience
            href="https://9skyventures.com/"
            side="Sep 2021 - Oct 2022"
            title="Full-stack Developer & Lead Engineer – 9SkyVentures"
            desc="I was getting offer for this opportunity from my previous employer at Rockliffe. I started as a full-stack developer, then promoted to lead engineer. I'm responsible for the whole development process, from planning, designing, and implementing the product. I also responsible for the team's performance and the product's quality."
            stack="Go • Flutter • Redis • Project Planning • Database Design • Google Cloud Platform • PostgreSQL"
          />
          <Experience
            side="Oct 2020 – Dec 2021"
            href="https://rockliffe.com/"
            title="Software Developer -focused Front End – Rockliffe"
            desc="I took charge of building Rockliffe’s product in desktop version, AstraChat. It is a Jabber/XMPP instant messaging application that allows organizations to own their private messaging servers in the cloud.
            "
            stack="Vue • Vuetify • XMPP • Electron • Vuex"
          />
          <Experience
            href="https://www.linkedin.com/company/lingotalklc/"
            side="Jul 2021 – Sep 2021"
            title="Full-stack Web Developer – Lingotalk"
            desc="Build and maintain personalised language learning solution."
            stack="Svelte • FaunaDB • Express.js"
          />

          <Heading as="h2" size="md" mt={14} mb={10}>
            Hey, I am also doing side hustle...
          </Heading>

          <Experience
            image="/freelancer-profile.png"
            side=""
            title="I'm open for freelance work."
            desc="I'm passionate about building a product that can help people to solve their problems."
            stack="Laravel • Odoo • Next.js • Go • Find out more by contacting me"
          />

          <Heading as="h2" size="md" mt={14} mb={10}>
            Links
          </Heading>

          <Experience
            side="Github"
            title="@yusronhanan"
            href="https://github.com/yusronhanan"
            mb={4}
          />
          <Experience
            side="Medium"
            title="@yusronzain"
            href="https://medium.com/@yusronzain"
            mb={4}
          />
        </Box>
      </Box>
    </>
  );
}
