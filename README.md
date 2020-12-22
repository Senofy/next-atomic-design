### Stack Information

-   Atomic Design Folder Structure
-   NextJS
-   React 17
-   Styled Components (for the atoms)
-   Testing with `Jest` and `React Testing Library`
-   Storybook

### Development Guide

**The components:**

1. Should be dumb (stateless)
2. Should have no attachment to redux
3. Should be able to plug into another project with nothing going wrong
    - Should look and run correctly with the minimal modules needed
4. Should not use anything like next/link inside a component

    - Should injected like this

    ```jsx
    import { Fragment, cloneElement } from 'react'
    import styles from './NavItem.module.css'
    import { P } from '~/components/atoms/Text/Text'

    const NavItem = ({ linkWrapper, link }) => {
    	const Link = linkWrapper || Fragment

    	return (
    		<Link href={link}>
    			<a className={styles.container}>test</a>
    		</Link>
    	)
    }

    export default NavItem
    ```

**This project is built to be used this way**

1. Create Atoms within `/components/atoms`
    - Group them up by type (All Inputs go inside Inputs)
2. Create Molecules to create more complex components using these atoms
3. Create Organisms to create more complex components using these organisms and molecules
4. Create templates with everything below (basically a page with no data)
5. Put the templates inside the pages and supply data into them
    - The pages should be the only thing connected to redux

#### Simplified Relative Imports

Relative imports have been made simple. If you have to go 2 or move levels deep into a directory, use the simple import syntax instead. The directories (and exports files) that can be accessed via simple import are as follows:

-   components/: `@components/`
-   components/atoms/index.ts: `@atoms`
-   components/molecules/index.ts: `@molecules`
-   components/organisms/index.ts: `@organisms`
-   components/templates/index.ts: `@templates`
-   context/index.ts: `@context`
-   graphql/generated.tsx: `@generated`
-   hooks/index.ts: `@hooks`
-   types.d.ts: `@app-types`
-   styled.d.ts: `@app-types/styled`
-   utils/index.ts: `@utils`

##### Examples

```js
// Access Head component at ~/components/Head.tsx
import Head from '@components/Head'

// Access Button component ar ~/components/atoms/Button/index.tsx
import { Button } from '@atoms' // or
import { Button } from '@components/atoms'
```

### Installation

-   Clone the repo and install dependencies with yarn

```sh
yarn install
```

-   Create a `.env` file in the root repository and copy over the contents from `.env.template`. Assign the right values to the variables.
