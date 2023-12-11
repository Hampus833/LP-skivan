import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector(".scroll-tracker");

const timeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: block,
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
})