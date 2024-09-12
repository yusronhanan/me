import { Link, Box, Text, Heading, GridItem } from '@chakra-ui/react';
import Head from 'next/head';
import { Grid } from '../components/Grid';
import { Experience } from '../components/Experience';
import { ContactList } from '../components/ContactList';
import { SideHustleSection } from '../components/SideHustleSection';
import Cursor from '../components/Cursor';
import { Avatar } from '../components/Avatar';

export default function Portfolio() {
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
              <Text>Software Engineer-focused Back End at <Link color="green" href="https://www.gojek.com/en-id" target="_blank">Gojek</Link></Text>
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
            EduTech, Chat Platform, Telemedicine, Finance, and On Demand Service Food Delivery. I'm also actively
            writing on my Medium platform, with 100+ claps and continuously
            growing.
          </Text>

          <Experience
              side=""
              title="💼 My Work Experiences"
              href={typeof window !== 'undefined' ? `${window.location.pathname}/` : '/me/'}
              mb={4}
          />
        </Box>
        <Box mb={14}>
            <Heading as="h2" size="md" mb={10}>
            I have dozens of Good Portfolios, but here is My Top 5
            </Heading>

            <Experience
                side="While I worked at Reku"
                title="Optimized Trading Engine for High-Frequency Trading"
                desc="A project focused on enhancing the performance of a trading engine to achieve sub-10ms response times for Buy/Sell API calls. This was accomplished by restructuring the trading engine's flow and architecture, implementing multi-layer caching, using an in-memory matching engine with Red-Black Trees (RBT), parallelizing processes, and optimizing cache lines."
                stack="I developed this project using Go, PostgreSQL, and Kafka. It leveraging microservices architecture and the SAGA pattern to ensure robust handling of failure scenarios. This system is designed for high reliability and scalability, providing seamless integration and fault tolerance across distributed services."
            />

            <Experience
                side="While I worked at Reku"
                title="Leaderboard Competition End to End"
                desc="An end-to-end leaderboard management system that handles everything from admin functionalities to end-user interactions. This project includes features for adding eligible users, tracking their progress, and managing the reward claiming process. It can be customizeable to be used for various types of competitions, such as transaction volume, deposit volume, withdraw volume, highest score, etc. The need for this feature arose from the desire to attract more users by providing a competitive and engaging experience, encouraging user participation and retention."
                stack="I developed this project using Go, PostgreSQL, and Kafka."
            />

            <Experience
                side="While I worked at Reku"
                title="Automated SMS Provider Switcher"
                desc="A service that dynamically switches between SMS providers based on country code, phone number provider, use priority, and provider performance. It is configurable and securely stores secret keys in an encrypted format. The need for this service arose from the challenge of manually handling SMS failures. Automating the switch between SMS providers can significantly reduce the need for manual intervention and on-call support."
                stack="I developed this project using Go, PostgreSQL, and Kafka."
            />

            <Experience
                side="While I worked at Reku"
                title="Cryptocurrency Price Alert System"
                desc="A comprehensive system designed to monitor cryptocurrency prices and send real-time alerts to users. This project allows users to set custom price thresholds for various coins and receive notifications when those thresholds are met, ensuring they never miss an important market movement. It successfully covered +160 coins with +300k active users"
                stack="I developed this project using Go, Redis PubSub, and Websocket for realtime experiences in Mobile App side."
            />

            <Experience
                side="While I worked at Rockliffe"
                title="AstraChat, Slack alternative (Desktop App)"
                desc="It is a Jabber/XMPP instant messaging application that allows organizations to own their private messaging servers in the cloud. I add most features like in Slack, such as personal chat 1:1, group chat, file transfer, push notification, share geolocation, vcard/user biodata, users presence and status, composing/inactive, file upload, archive message, logging, search messages, etc."
                stack="I developed this project using Vue.js and Electron.js to create a seamless desktop application. The application optimizes WebSocket connections with an extensive XMPP server integration to provide real-time chat experiences."
            />
            
            <SideHustleSection/>
            
            <ContactList/>
        </Box>
      </Box>
    </>
  );
}
