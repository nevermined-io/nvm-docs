export const convertLinkToGift = (htmlString: string): string => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlString, "text/html")
  doc.querySelectorAll("a").forEach((tag) => {
    if (
      tag.hasAttribute("href") &&
      tag.getAttribute("href").includes("/href")
    ) {
      const src = tag.getAttribute("href")
      const imgTag = document.createElement("img")
      tag.parentElement.replaceChild(imgTag, tag)
      imgTag.setAttribute("src", src)
      imgTag.setAttribute("alt", "Gift")
    }
  })

  return doc.documentElement.innerHTML
}
