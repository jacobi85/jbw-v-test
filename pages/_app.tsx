import { Cars } from "../src/components/Cars";
import "../public/css/styles.css";
import React from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";
import { AppStateProvider } from "../src/state/AppStateContext";
import Layout from '../src/components/Layout'

function HomePage() {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <React.StrictMode>
          <AppStateProvider>
            <Layout>
              <Cars />
            </Layout>
          </AppStateProvider>
        </React.StrictMode>
      </ThemePicker>
    </StyleProvider>
  );
}

export default HomePage;
