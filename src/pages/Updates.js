import React from "react";
import Layout from "@theme/Layout";
import { Heading, Stack, Divider } from "@chakra-ui/react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function Updates() {
  return (
    <Layout>
      <Stack
        px={3}
        mt={12}
        minH="70vh"
        align="center"
        width="100%"
        bg="red.200"
      >
        <Heading style={{ fontSize: "1rem" }} textAlign="center">
          Updates from Somaliland Ministry of Foriegn Affiars
        </Heading>
        <Divider py={2} />
        <div id="twitter-wrapper">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="somalilandmfa"
            options={{ height: "80vh", width: "100%" }}
            onLoad={(iframe) => {
              if (iframe) {
                let body = iframe.contentDocument.querySelector("body");
            
                if (body) {
                  body.style.display = "flex";
                  body.style.justifyContent = "center";
                }
              }
            }}
          />
        </div>
      </Stack>
    </Layout>
  );
}
