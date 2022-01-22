import cmds from './bot info/commandsList';
import React from "react";

function App() {
  return (
      <main>
          <commandInfo>
              <>
          {cmds.map(cmd => {
              return (
                  <ol>
                      {cmd.commandName} => {cmd.commandInfo}
                  </ol>
              )
          })}
              </>
          </commandInfo>
      </main>
  );
};

export default App;
