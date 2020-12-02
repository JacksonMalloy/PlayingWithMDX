const breakpoints = ['850px', '700px', '576px']

// create-media-queries.js
const createMediaQueries = (css) => {
  const cssKeyValuePairs = css.reduce((items, item) => {
    const { property, values } = item
    items.push(
      Array.isArray(item.values)
        ? values.map((value) => ({
            [property]: value,
          }))
        : [{ [property]: values }]
    )
    return items
  }, [])

  const cssToBreakpoints = [0, ...breakpoints]
    .map((breakpoint, index) => ({
      breakpoint: breakpoint,
      css: cssKeyValuePairs
        .map((array) => array[index])
        .filter(Boolean)
        .reduce((items, item) => {
          items[`${Object.keys(item)}`] = `${Object.values(item)}`
          return items
        }, {}),
    }))
    .slice(0, -1)

  const cssMediaQueries = cssToBreakpoints.reduce((items, item) => {
    const { breakpoint, css } = item

    const handleBreakPointAssociation = () => {
      if (breakpoint) {
        items[`@media(max-width: ${breakpoint})`] = {
          ...css,
        }
      } else {
        items = { ...css }
      }
    }

    handleBreakPointAssociation()

    return items
  }, {})

  return {
    ...cssMediaQueries,
  }
}

export const h1Extract = () => ({
  ...createMediaQueries([
    {
      property: 'font-size',
      // Perfect fifth, perfect fourth, major third
      values: ['5.063rem', '4.209rem', '3.052rem'],
    },
  ]),
})

export const h2Extract = () => ({
  ...createMediaQueries([
    {
      property: 'font-size',
      // Perfect fifth, perfect fourth, major third
      values: ['5.063rem', '3.157rem', '2.441rem'],
    },
  ]),
})

export const h3Extract = () => ({
  ...createMediaQueries([
    {
      property: 'font-size',
      // Perfect fifth, perfect fourth, major third
      values: ['3.375rem', '2.369rem', '1.953rem'],
    },
  ]),
})

export const h4Extract = () => ({
  ...createMediaQueries([
    {
      property: 'font-size',
      // Perfect fifth, perfect fourth, major third
      values: ['2.25rem', '1.777rem', '1.563rem'],
    },
  ]),
})

export const h5Extract = () => ({
  ...createMediaQueries([
    {
      property: 'font-size',
      // Perfect fifth, perfect fourth, major third
      values: ['1.5rem', '1.333rem', '1.25rem'],
    },
  ]),
})