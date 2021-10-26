const core = require('@actions/core');
const github = require('@actions/github');

try {
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);

  const date = new Date();
  const time = date.toTimeString();

  core.setOutput('time', time);

  const githubPayload = github.context.payload;
  const payload = JSON.stringify(githubPayload);
  console.log(`The event payload: ${payload}`);
} catch(error) {
  core.setFailed(error.message);
}