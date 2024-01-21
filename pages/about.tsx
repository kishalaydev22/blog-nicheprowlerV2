import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";

const About: NextPage = () => {
  return (
    <>
      <Page
        title="About"
        description="This is a brief description about the about page."
      >
        <Prose>
          <p>
            Welcome to Nicheprowler – Your Gateway to SaaS Excellence! At
            Nicheprowler, we're passionate about empowering businesses and
            individuals in the Software as a Service (SaaS) landscape.
          </p>
          <p>
            Our mission is to simplify your journey by providing a one-stop
            platform for discovering the best software tools, validating
            innovative ideas, and exploring profitable niche inspirations.
          </p>
          <p>
            Founded on the principles of comprehensive knowledge and
            user-centricity, Nicheprowler is your trusted companion in
            navigating the dynamic SaaS universe.
          </p>
          <p>
            Our platform offers a rich repository of tools, expert strategies,
            and niche insights to catalyze your success.
          </p>
        </Prose>
      </Page>
    </>
  );
};

export default About;
