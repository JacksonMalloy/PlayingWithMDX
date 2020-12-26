const breakpoints = ['850px', '775px', '576px']

// create-media-queries.js
const createMediaQueries = (css: any[]) => {
  const cssKeyValuePairs = css.reduce((items: any[], item) => {
    const { property, values } = item
    items.push(
      Array.isArray(item.values)
        ? values.map((value: any) => ({
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
        .map((array: any[]) => array[index])
        .filter(Boolean)
        .reduce((items: { [x: string]: string }, item: { [s: string]: unknown } | ArrayLike<unknown>) => {
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

export const h1FontSizes = () => ({
  ...createMediaQueries([
    {
      property: 'font-size',
      // Perfect fifth, perfect fourth, major third
      values: ['5.063rem', '4.209rem', '3.052rem'],
    },
  ]),
})

export const h2FontSizes = () => ({
  ...createMediaQueries([
    {
      property: 'font-size',
      // Perfect fifth, perfect fourth, major third
      values: ['5.063rem', '3.157rem', '2.441rem'],
    },
  ]),
})

export const h3FontSizes = () => ({
  ...createMediaQueries([
    {
      property: 'font-size',
      // Perfect fifth, perfect fourth, major third
      values: ['3.375rem', '2.369rem', '1.953rem'],
    },
  ]),
})

export const h4FontSizes = () => ({
  ...createMediaQueries([
    {
      property: 'font-size',
      // Perfect fifth, perfect fourth, major third
      values: ['2.25rem', '1.777rem', '1.563rem'],
    },
  ]),
})

export const h5FontSizes = () => ({
  ...createMediaQueries([
    {
      property: 'font-size',
      // Perfect fifth, perfect fourth, major third
      values: ['1.5rem', '1.333rem', '1.25rem'],
    },
  ]),
})

export const pFontSizes = () => ({
  ...createMediaQueries([
    {
      property: 'font-size',
      // Perfect fifth, perfect fourth, major third
      values: ['1.333rem', '1.25rem', '1rem'],
    },
    {
      property: 'line-height',
      values: ['2.3rem', '2rem', '1.8rem'],
    },
  ]),
})

export const bqFontSizes = () => ({
  ...createMediaQueries([
    {
      property: 'font-size',
      // Perfect fifth, perfect fourth, major third
      values: ['1.333rem', '1.25rem', '1rem'],
    },
    {
      property: 'line-height',
      values: ['2.3rem', '2rem', '1.8rem'],
    },
  ]),
})

export const preFontSizes = () => ({
  ...createMediaQueries([
    {
      property: 'font-size',
      // Perfect fifth, perfect fourth, major third
      values: ['1rem', '1rem', '1rem'],
    },
  ]),
})

export const smallFontSizes = () => ({
  ...createMediaQueries([
    {
      property: 'font-size',
      // Perfect fifth, perfect fourth, major third
      values: ['1rem', '1rem', '1rem'],
    },
  ]),
})
