import React from "react";
import Link from 'next/link';

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => {
  
return (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          This website is a display of projects I have built in my development
          journey.
        </SectionText>

        <Link href='#projects'>
          <Button>
            Learn More
          </Button>
        </Link>
        
      </LeftSection>
    </Section>
  </>
)
};

export default Hero;
