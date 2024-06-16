import React from "react";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
// import { Button, ButtonText, ButtonIcon, AddIcon } from "@gluestack-ui/themed";
import { Heading, Center } from "@gluestack-ui/themed"
import GPTCard from "../components/GPTCard";
import EventModal from "../components/EventModal";


const Camera: React.FC = () => {
    return (
    //   <GPTCard
    //   key={1}
    //   name={"Learning about LLMs"}
    //   time={"3:00PM"}
    //   location={"Siebel 1404"}
    //   person={"Prof wade"}
    //   graphic={"event.graphic"}
    //   description={"Lets learn"}
    // />
    <EventModal
            title={"title"}
            location={"location"}
            time={"time"}
            points={"points"}
            description={"description"}
          />
    );
  };
  
export default Camera;