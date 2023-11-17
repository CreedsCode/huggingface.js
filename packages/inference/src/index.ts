export { HfInference, HfInferenceEndpoint } from "./HfInference";
export { InferenceOutputError } from "./lib/InferenceOutputError";
export * from "./types";
export * from "./tasks";

console.log(fetch, typeof fetch);

if (typeof fetch !== 'undefined') {
    throw new Error('fetch is already defined. This environment may already provide and implementation of fetch.');
}

if (typeof globalThis === 'object') {
    globalThis.fetch = fetch;
} else if (typeof global === 'object') {
    global.fetch = fetch;
} else {
    // Everything else is not supported
    throw new Error('Unknown JavaScript environment: Not supported');
}
