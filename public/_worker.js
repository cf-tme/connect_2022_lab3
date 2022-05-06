export default {
    async fetch(request, env) {
        const response = await env.ASSETS.fetch(request);
        const imageA = "https://unsplash.com/photos/ZuhXK3lxL8Y/download?ixid=MnwxMjA3fDB8MXxhbGx8M3x8fHx8fDJ8fDE2NTE2ODAwMjU&force=true&w=640";
        const imageB = "https://unsplash.com/photos/Yh_xH-tWI-0/download?force=true&w=640";
        const imageURL = Math.random() > 0.5 ? imageA : imageB;
        return new HTMLRewriter()
        .on("body", {
          element(body) {
            body.append(`<img src="${imageURL}" />`, { html: true });
          },
        })
        .transform(response);

    },
  };