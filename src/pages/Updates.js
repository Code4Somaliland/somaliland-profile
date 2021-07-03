import React from 'react'
import Layout from "@theme/Layout";
import { Box, Flex, Heading, Text, Stack, Divider } from "@chakra-ui/react";
import {
  TwitterTimelineEmbed,
} from "react-twitter-embed";



export default function Updates() {
    return (
      <Layout>
      <Stack spacing={6} px={3} mt={8}>
        <Heading style={{fontSize: '1rem'}} textAlign="center">Updates from Somaliland Foriegn Affairs Ministry</Heading>
        <Divider py={2}/>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="somalilandmfa"
          options={{ height: 600 }}
        />
      </Stack>
      </Layout>
    );
}
