export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const imageA = "https://unsplash.com/photos/ZuhXK3lxL8Y/download?ixid=MnwxMjA3fDB8MXxhbGx8M3x8fHx8fDJ8fDE2NTE2ODAwMjU&force=true&w=640";
        const imageB = "https://unsplash.com/photos/Yh_xH-tWI-0/download?force=true&w=640";
        const response = await env.ASSETS.fetch(request);

        const imageURL = Math.random() > 0.5 ? imageA : imageB;

        return new HTMLRewriter()
            .on("body", {
            element(body) {
                body.append(`<img src="${imageURL}" />`, { html: true });
            },
            })
            .transform(response);




      if (url.pathname.startsWith('/api/')) {
        // TODO: Add your custom /api/* logic here.
        
      }
      // Otherwise, serve the static assets.
      // Without this, the Worker will error and no assets will be served.
      return env.ASSETS.fetch(request);
    },
  };


const imageA =
  "https://unsplash.com/photos/ZuhXK3lxL8Y/download?ixid=MnwxMjA3fDB8MXxhbGx8M3x8fHx8fDJ8fDE2NTE2ODAwMjU&force=true&w=640";
const imageB =
  "https://unsplash.com/photos/Yh_xH-tWI-0/download?force=true&w=640";

export const onRequest: PagesFunction = async ({ env, request }) => {
  const response = await env.ASSETS.fetch(request);

  const imageURL = Math.random() > 0.5 ? imageA : imageB;

  return new HTMLRewriter()
    .on("body", {
      element(body) {
        body.append(`<img src="${imageURL}" />`, { html: true });
      },
    })
    .transform(response);
};
