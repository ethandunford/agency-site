const trimContent = (text, maxLength) => {
  if (text && maxLength != null) {
    let trimmedString = ''
    if (text.length > trimmedString.length) {
      trimmedString = text.substr(0, maxLength)
      const trimmedLastOf =
        trimmedString.lastIndexOf(' ') !== -1
          ? trimmedString.lastIndexOf(' ')
          : maxLength
      text = trimmedString.substr(
        0,
        Math.min(trimmedString.length, trimmedLastOf)
      )
    }
  }
  return text
}

export default trimContent