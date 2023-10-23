import ForgeUI, { render, Fragment } from "@forge/ui";
import ChatBotUI from "./chatbot-ui";
// const express = require('express');

const App = () => {
  return (
      <ChatBotUI/>  
  );
};

export const run = render(<App />);

// export const run = () => {
//   return (
//     <PortalFooter>
//       <App/>
//     </PortalFooter>
//   );
// }