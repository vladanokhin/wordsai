import $ from "jquery";
import PerfectScrollbar from "perfect-scrollbar";

export const perfectScrollBarMixin = {
    data() {
        return {
            scrollBar: null,
        }
    },
    methods: {
        initScrollBar(selector, options) {
            const opt = {
                wheelSpeed: 2,
                wheelPropagation: false,
                minScrollbarLength: 20
            } || options;

            this.scrollBar = $(selector);
            new PerfectScrollbar(this.scrollBar[0], opt);
        },
        scrollToEndBlock() {
            this.scrollBar
                .animate({scrollTop: this.scrollBar.prop("scrollHeight")});
        },
    }
}
