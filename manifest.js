fetch("./public/manifest.json")
  .then(response => response.json())
  .then(res => {
  for (const [key, value] of Object.entries(res)) {
    window.MyState = res
    let src = value.split("/")
    src.shift()
    src = src.join("/")
    if (value.includes("js") && key === "frontend/index.ts") {
      if (key === "frontend/index.ts") {
        src = "" + src
      }
      const script = document.createElement("script")
      script.setAttribute("async", "")
      script.setAttribute("type", "module")
      script.setAttribute("src", "public/" + src)
      document.body.appendChild(script)
    } else if (value.endsWith("css")) {
      if (key.includes("global")) {
        src = src.split("/")
        src = "styles/" + src.pop()
      }
      const link = document.createElement("link")
      link.setAttribute("rel", "stylesheet")
      link.setAttribute("href", "public/" + src)
      document.head.appendChild(link)
    }
  }
})