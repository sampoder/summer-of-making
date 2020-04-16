import React from 'react'
import { theme } from '@hackclub/design-system'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Landing from 'components/summer-of-making/Landing'
import Run from 'components/summer-of-making/Run'
import Features from 'components/summer-of-making/Features'
import Timeline from 'components/summer-of-making/Timeline'
import Start from 'components/summer-of-making/Start'

const styles = `
  body {
    width: 100%;
    max-width: 100vw;
    background: ${theme.colors.dark};
  }
  ::selection {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    text-shadow: none;
  }
`

const title = 'Hack Club Bank – The Bank For Student Hackers'
const desc =
  'Hack Club Bank provides a 501(c)(3) status-backed bank account optimized for high school hackathons that includes invoicing, debit cards, pre-written legal forms, seamless receipt collection, and automated tax filing to help organizers focus on running great events.'

export default () => (
  <Layout title={title} desc={desc} img="/cards/bank_one.png" path="/bank/">
    <style children={styles} />
    <Nav dark/>
    <Landing />
    <Features />
    <Timeline />
    <Run />
    <Start />
    <Footer dark />
  </Layout>
)
