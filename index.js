const core = require('@actions/core');

try {
  // JIRA ISSUE KEY REGEX
  pattern=/[A-Za-z]{2,}-\d+/g

  // input string
  const search = core.getInput('search');
  console.log(`SEARCHING: ${search}!`);

  // result of matches
  keys=search.toUpperCase().match(pattern)

  //remove dup
  keys=[...new Set(keys)];

  // if no match found
  exists=keys.length>0

  // get first element if match found
  key=exists?keys[0]:''
  
  // define outputs
  core.setOutput("key", key);
  core.setOutput("keys", keys);
  core.setOutput("exists", exists);
} catch (error) {
  core.setFailed(error.message);
}
