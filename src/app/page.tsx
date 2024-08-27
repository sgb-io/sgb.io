import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sam Brown",
};

export default function Page() {
  return (
    <main>
      <h2>My Profiles</h2>
      <ul>
        <li>
          LinkedIn -{" "}
          <a href="https://www.linkedin.com/in/sgb-io/">
            https://www.linkedin.com/in/sgb-io/
          </a>
        </li>
        <li>
          GitHub -{" "}
          <a href="https://github.com/sgb-io">https://github.com/sgb-io</a>
        </li>
      </ul>
      <h2>Open Source Projects</h2>
      <ul>
        <li>
          <strong>Saving Tool UK:</strong> UK Personal Finance tool -{" "}
          <a href="https://savingtool.co.uk">https://savingtool.co.uk</a>
        </li>
        <li>
          <strong>Fast TypeScript Analyzer:</strong> Rust-based Static Analysis
          for TypeScript Projects{" "}
          <a href="https://github.com/sgb-io/fta">
            https://github.com/sgb-io/fta
          </a>
        </li>
        <li>
          <strong>Functional Algos:</strong> TypeScript Lib -{" "}
          <a href="https://github.com/sgb-io/functional-algos">
            https://github.com/sgb-io/functional-algos
          </a>
        </li>
        <li>
          <strong>HMRC Income Tax:</strong> NPM package{" "}
          <a href="https://github.com/SavingTool/hmrc-income-tax">
            https://github.com/SavingTool/hmrc-income-tax
          </a>
        </li>
        <li>
          <strong>Modular:</strong> (Contributor) Micro-frontend library -{" "}
          <a href="https://github.com/jpmorganchase/modular">
            https://github.com/jpmorganchase/modular
          </a>
        </li>
      </ul>
      <h2>Contact</h2>
      <ul>
        <li>
          Email: <a href="sam@sgb.io">sam@sgb.io</a>
        </li>
      </ul>
    </main>
  );
}
