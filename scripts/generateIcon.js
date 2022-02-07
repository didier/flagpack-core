import { fullIcon } from '@iconify/utils/lib/icon'
import { iconToSVG } from '@iconify/utils/lib/svg/build'
import { defaults } from '@iconify/utils/lib/customisations'
import { replaceIDs } from '@iconify/utils/lib/svg/id'

export default function generateIcon(icon) {
  const iconData = fullIcon(iconData)
  const renderData = iconToSVG(iconData, defaults)

  const svgAttributes = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    ...renderData.attributes
  }

  if (renderData.inline) {
    svgAttributes.style = 'vertical-align: -0.125em;'
  }

  const svgAttributesStr = Object.keys(svgAttributes)
    // No need to check attributes for special characters, such as quotes,
    // they cannot contain anything that needs escaping.
    .map((attr) => `${attr}="${svgAttributes[attr]}"`)
    .join(' ')

  const svg = `<svg ${svgAttributesStr}>${replaceIDs(renderData.body)}</svg>`
}
