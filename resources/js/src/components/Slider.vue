<template>
    <div class="slider-light">
        <div class="slick-slider">
            <div v-for="element in sliderElements">
                <div :class="['position-relative', 'h-100', 'd-flex', 'justify-content-center', 'align-items-center', element.style]"
                     tabindex="-1"
                >
                    <div class="slide-img-bg"
                         :style="{ backgroundImage: `url(${element.imageUrl})` }"
                    >
                    </div>
                    <div class="slider-content">
                        <h3>{{ element.title }}</h3>
                        <p>{{ element.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";

export default {
    name: "Slider",
    props: {
        sliderElements: Object,
    },
    mounted() {
        this.initSlider();
    },
    methods: {
        initSlider() {
            setTimeout(function (){
                $(".slick-slider").slick({
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                });
            }, 100);
        }
    }
}
</script>

<style scoped>

</style>
