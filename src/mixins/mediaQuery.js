const breakpoints = {
   xxs: {
       max: 399,
   },
   xs: {
       min: 400,
       max: 575,
   },
   sm: {
       min: 576,
       max: 767,
   },
   md: {
       min: 768,
       max: 991,
   },
   lg: {
       min: 992,
       max: 1199,
   },
   xl: {
       min: 1200,
       max: 1399,
   },
   xxl: {
       min: 1400,
   },
}

export default {
   computed: {
       $mq () {
           return this.mq
       },
   },
   data () {
       return {
           mq: {
               w: 0,
               h: 0,
               ...breakpoints,
           },
       }
   },
//    mounted () {
//        window.addEventListener('resize', this.mqGetWindowWidth)
//        window.addEventListener('resize', this.mqGetWindowHeight)
//        this.mqGetWindowWidth()
//        this.mqGetWindowHeight()
//    },
//    methods: {
//       mqGetWindowWidth (event) {
//          this.mq.w = document.documentElement.clientWidth
//       },
//       mqGetWindowHeight (event) {
//          this.mq.h = document.documentElement.clientHeight
//       },
//    },
//    beforeDestroy () {
//        window.removeEventListener('resize', this.mqGetWindowWidth)
//        window.removeEventListener('resize', this.mqGetWindowHeight)
//    },
}
