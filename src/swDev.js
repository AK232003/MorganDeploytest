export default function swDev() {
    let swURL = `${process.env.PUBLIC_URL}/serviceworker.js`
    navigator.serviceWorker.register(swURL).then((response) => {
        console.warn("response", response);
    })
}