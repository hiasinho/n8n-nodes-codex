# Contributor Guide for n8n Codex Node

## Dev Environment Tips

* **Clone & install**:

  ```bash
  git clone https://github.com/hiasinho/n8n-nodes-codex.git
  cd n8n-nodes-codex
  npm install
  ```
* **Workspace structure**:

  * Root `tsconfig.json` and `package.json` define workspaces.
  * Node package at `nodes/OpenAICodex/` has its own `package.json` and `tsconfig.json`.

* **Add dependencies**:

  ```bash
  npm install <pkg>          # at repo root
  cd nodes/OpenAICodex
  npm install <pkg>          # in node package
  ```

* **Lint & type-check**:

  ```bash
  npm run lint
  npm run build:type-check
  ```

## Testing Instructions (TDD)

* **Test-Driven Development**: write a failing test before any implementation.

1. **Set up test framework**

   * Ensure Vitest (or Jest) is installed in node package:

     ```bash
     cd nodes/OpenAICodex
     npm install --save-dev vitest ts-node @types/node
     ```
   * Add test script in `nodes/OpenAICodex/package.json`:

     ```json
     "scripts": {
       "test": "vitest"
     }
     ```

2. **Mock HTTP calls** (no real web access)

   * Use `nock` or `msw` to simulate OpenAI API responses.
   * Example in tests:

     ```ts
     import nock from 'nock';

     nock('https://api.openai.com')
       .post('/v1/engines/code/completions')
       .reply(200, { choices: [{ text: 'generated code' }] });
     ```

3. **Write tests first**

   * Create a new test file, e.g. `nodes/OpenAICodex/__tests__/completion.spec.ts`.
   * Describe expected behavior:

     ```ts
     import { execute } from '../OpenAICodex.node';

     test('should call Codex completion', async () => {
       // setup mock
       // call execute with parameters
       // assert output matches mock
     });
     ```

4. **Run tests**

   ```bash
   cd nodes/OpenAICodex
   npm test -- --watch
   ```

5. **Implement minimal code**

   * Modify `OpenAICodex.node.ts` to satisfy tests.
   * Repeat until test passes; then refactor.

6. **Final checks**

   ```bash
   npm run lint
   npm run build:type-check
   ```
