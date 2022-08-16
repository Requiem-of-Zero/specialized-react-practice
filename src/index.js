import React from "react";
import App from "./App";
import { createRoot } from 'react-dom/client';
import "./styles.css";

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App name="Daddy" />);