import { promises as fs } from 'fs'
import {
  importDirectory,
  cleanupSVG,
  runSVGO,
  exportJSONPackage,
  IconSet,
  execAsync
} from '@iconify/tools'

const sizes = ['s', 'm', 'l']

sizes.forEach(async (size) => {
  // Import icons
  const iconSet = await importDirectory('./flags', {
    prefix: `flagpack-${size}`
  })

  // Validate, clean up, fix palette and optimise
  await iconSet.forEach(async (name, type) => {
    if (type !== 'icon') return

    const svg = iconSet.toSVG(name)
    if (!svg) {
      // Invalid icon
      iconSet.remove(name)
      return
    }

    // Clean up and optimise icons
    try {
      // Clean up icon code
      await cleanupSVG(svg)

      // Optimise
      await runSVGO(svg)
    } catch (err) {
      // Invalid icon
      console.error(`Error parsing ${name}:`, err)
      iconSet.remove(name)
      return
    }

    // Update icon
    iconSet.fromSVG(name, svg)
  })

  // Export as IconifyJSON
  const exported = JSON.stringify(iconSet.export(), null, '\t') + '\n'

  // Save to file
  // await fs.writeFile(`dist/${iconSet.prefix}.json`, exported, 'utf8')

  const target = `dist/${iconSet.prefix}`
  await exportJSONPackage(iconSet, {
    target,
    package: {
      name: `@iconify-json/${iconSet.prefix}`,
      version: '1.0.0',
      bugs: 'https://github.com/iconify/iconify/issues',
      homepage: 'https://github.com/iconify/iconify'
    },
    cleanup: true
    /*
       customFiles: {
           'README.md': 'README!',
       },
       */
  })

  console.log('Generated icon set:', target)
})
