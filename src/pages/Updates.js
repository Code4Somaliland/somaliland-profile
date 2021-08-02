import React from "react";
import Layout from "@theme/Layout";
import { Text, Stack, Divider } from "@chakra-ui/react";
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
        <Text style={{ fontSize: "1rem" }} textAlign="center">
          Updates from Somaliland Ministry of Foriegn Affiars
        </Text>
        <Divider py={2} />
        <div id="twitter-wrapper">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="somalilandmfa"
            options={({ height: "80vh" }, { id: "profile:twitterdev" })}
            onLoad={(iframe) => {
              if (iframe) {
                let body = iframe.contentDocument.querySelector("body");
                let div =
                  iframe.contentDocument.querySelector(".timeline-Widget");

                if (body) {
                  body.style.width = "100%";
                  div.style.margin = "0 auto";
                }
              }
            }}
          />
        </div>
      </Stack>
    </Layout>
  );
}
