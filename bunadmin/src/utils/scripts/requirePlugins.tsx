const requirePlugins = (path: string) => {
  try {
    return require(`@plugins/${path}`)
  } catch (err) {
    return null
  }
}

export default requirePlugins
