# NextJS Atomic Design Template

### This template is based off Brad Frost's atomic design methodology.

[https://atomicdesign.bradfrost.com/](https://atomicdesign.bradfrost.com/)

---

This template has these capabilities:

- Atomic Design Folder Structure
- Importing with ~/ for easy access to the folders
- NextJS SSR
- Redux (Redux-Thunk as well)
- React 17
- NextJS 10
- CSS Modules (with the suffix .module.css)
- Styled Components (for the atoms)
- Unit Testing with Jest

**The components should be:**

1. Should be dumb (stateless)
2. Should have no attachment to redux
3. Should be able to plug into another project with nothing going wrong 
    1. Should look and run correctly with the minimal modules needed
4. Should not use anything like next/link inside a component
    1. You should inject components, like this

    ```jsx
    import { Fragment, cloneElement } from 'react'
    import styles from './NavItem.module.css'
    import { P } from '~/components/atoms/Text/Text'

    const NavItem = ({ linkWrapper, link }) => {
        const Link = linkWrapper || Fragment

        return (
            <Link href = {link}>
                <a className = {styles.container}>
                    test
                </a>
            </Link>
        )
    }

    export default NavItem
    ```

**This template is built to be used this way**

1. Create Atoms within /components/atoms
    1. Group them up by type (All Inputs go inside Inputs)
2. Create Molecules to create more complex components using these atoms
3. Create Organisms to create more complex components using these organisms and molecules
4. Create templates with everything below (basically a page with no data)
5. Put the templates inside the pages and supply data into them
    1. The pages should be the only thing connected to redux
