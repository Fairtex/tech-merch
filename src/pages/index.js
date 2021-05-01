import * as React from "react";

import 'assets/styles/index.scss';

import Layout from "components/layout";
import SEO from "components/seo";
import Hero from "components/hero";
import About from "components/about";
import Services from "components/services";
import Portfolio from "components/portfolio";
import Contacts from "components/contacts";
import Order from "components/order";

const IndexPage = () => {
  const submitHandler = (v) => {
    console.log(v);
  }
  return (
  <Layout isMain>
    <SEO title="Главная" />
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <Contacts />
    <Order />
  </Layout>
)};

export default IndexPage
