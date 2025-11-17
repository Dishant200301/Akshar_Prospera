// A simple, minimal mock Lottie JSON structure.
// In a real application, these must be replaced by your downloaded Lottie JSON files.

const mockLottieData = {
    v: "5.5.2",
    nm: "Mock Lottie",
    assets: [],
    layers: [{
        ty: 4,
        shapes: [
            // Mock shape for a simple circle
            { it: [{ c: false, v: [{ i: [0.354, 0.354], o: [-0.354, -0.354], s: [50, 0], e: [50, 100] }], "cl": true }], type: "sh" }
        ],
        ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [500, 500], ix: 2 }, a: { a: 0, k: [500, 500], ix: 1 }, s: { a: 0, k: [100, 100], ix: 6 } },
        ao: 0,
        ip: 0,
        op: 100,
        st: 0,
        bm: 0
    }]
};

export const healthLottie = mockLottieData;
export const travelLottie = mockLottieData;
export const lifeLottie = mockLottieData;
export const homeLottie = mockLottieData;
export const autoLottie = mockLottieData;