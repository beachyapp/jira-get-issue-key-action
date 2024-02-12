# JIRA get issue key javascript action

This action will return JIRA issue key from a given input string.

## Inputs

## `search`

**Required** The string you want this action to be performed on (example: `${{ github.event.pull_request.head.ref }}`).

## Outputs

## `exists`

true/false if no match found

## `key`

JIRA issue key

## `keys`

JIRA issue keys

## Example usage

```
- name: Get JIRA tickets
  id: jira
  uses: beachyapp/jira-get-issue-key-action@v0.2
  with:
    search: ${{ github.event.pull_request.head.ref }}
- name: output
  run: |
    echo "first key found: ${{ steps.jira.outputs.key }}"
    echo "list of keys: ${{ steps.jira.outputs.keys }}"
    echo "match found: ${{ steps.jira.outputs.exists }}"
```

## Compiling and pushing changes

Checking in your node_modules directory can cause problems. As an alternative, you can use a tool called @vercel/ncc to compile your code and modules into one file used for distribution.

Install vercel/ncc by running this command in your terminal.

`npm i -g @vercel/ncc`

Compile your index.js file.

`ncc build index.js --license licenses.txt`

You'll see a new dist/index.js file with your code and the compiled modules. You will also see an accompanying dist/licenses.txt file containing all the licenses of the node_modules you are using.

Change the main keyword in your action.yml file to use the new dist/index.js file.

`main: 'dist/index.js'`

If you already checked in your node_modules directory, remove it.

`rm -rf node_modules/*`

From your terminal, commit the updates to your action.yml, dist/index.js, and node_modules files.

```shell
git add action.yml dist/index.js node_modules/*
git commit -m "Use vercel/ncc"
git tag -a -m "My first action release" v1.1
git push --follow-tags
```
