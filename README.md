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