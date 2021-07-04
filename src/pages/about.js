import React from 'react';
import clsx from 'clsx';
import { Box, Flex, Heading, Text, Stack, Divider } from "@chakra-ui/react";
import {StarIcon } from '@chakra-ui/icons'

import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';





function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
       
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Somaliland Country Profile"
    >
      <HomepageHeader />
      <main>
        <Box bg="red" w="100%" p={48} color="white" />
        <Flex
          bg="white"
          w="100%"
          p={16}
          color="white"
          justify="center"
          align="center"
        >
          <StarIcon style={{ color: "black" }} w={32} h={32} color="gray.500" />
        </Flex>
        <Box bg="green" w="100%" p={48} color="white" />
        <Flex justify="center" my="3rem">
          <Stack spacing={8} maxW="48em" px="10px">
            <Text>
              Somaliland has a long history that goes back thousands of years.
              10,000 year old Neolithic paintings in Las Geel, near Hargeisa,
              the capital, show that Somaliland was home to the earliest
              civilizations in the world.
            </Text>
            <Text>
              Somaliland, as part of the Land of Punt was a major trading
              partner with ancient Egyptians as records during the reign of
              Sahura of the Fifth Dynasty around 2250 BCE indicate. The coastal
              cities of Zeila, Berbera and Maydh were deeply involved in spice
              trade with the Romans.
            </Text>
            <Text>
              In the 7th century, Islam was introduced to Somaliland, and by the
              13th century had a thriving Islamic sultanate, Adal, whose main
              port was Zeila. But the modern history of Somaliland started in
              the 19th century as presented chronologically below:
            </Text>
          </Stack>
        </Flex>
        <Divider />
        <Stack justify="center" align="center" width="100%">
          <Heading>Somaliland in Pictures</Heading>
        </Stack>
         
      </main>
    </Layout>
  );
}
