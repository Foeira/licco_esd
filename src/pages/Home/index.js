import React from "react";
import Layout from "../../components/Layout";
import Biometricos from "./Biometricos";
import Intro2 from "./Intro2";
import PorqueLicco from "./PorqueLicco";

function Clients() {
  return (
    <div>
      <Layout>
        <div className="px-32 sm:px-2">
          <Intro2 />
          <Biometricos />
          <PorqueLicco />
        </div>
      </Layout>
    </div>
  );
}

export default Clients;
