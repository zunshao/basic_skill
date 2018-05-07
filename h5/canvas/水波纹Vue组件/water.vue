<template>
  <div
    class="border"
    :style="{border: '1px solid '+ useConfigData.borderColor,
             padding: useConfigData.containerPadding + 'px',
             width: useConfigData.width + 'px',
             height:useConfigData.width + 'px'}">
    <div class="content" ref="canvasBox">
      <canvas
        id="canvas"
        class="canvas"
        ref="canvas"
        :width="useConfigData.width * loops + 'px'"
        :height="useConfigData.width + 'px'"
        :style="{left: -useConfigData.width + 'px',
                 background: useConfigData.containerBg,}">
      </canvas>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvasBoxSize: {
        width: 0,
        height: 0
      },
      context: null,
      animateFlag: {
        x: 0,
        y: 0
      },
      defaultOptions: {
        width: 200,
        borderColor: '#315E7F',
        containerBg: '#033958',
        containerPadding: 4,
        canvasInColor: '#f57d02',
        canvasOutColorStart: '#f4531f',
        canvasOutColorEnd: '#ffd54f',
        verticalVelocity: 4,
        horizontalVelocity: 1,
        levelHeight: 0.8,
        upOffset: 0.15,
        downOffset: 0.1
      },
      loops: 4
    }
  },
  props: {
    configData: {
      type: Object,
      default: function () {
        return this.defaultOptions
      }
    }
  },
  components: {

  },
  computed: {
    useConfigData: function () {
      return Object.assign(this.defaultOptions, this.configData)
    }
  },
  mounted() {
    this.canvasBoxSize.width = this.$refs.canvasBox.offsetWidth
    this.canvasBoxSize.height = this.$refs.canvasBox.offsetHeight
    this.animateFlag.y = this.canvasBoxSize.height
    window.requestNextAnimationFrame = (function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (callback, element) {
          let self = this
          let start = null
          let finish = null
          window.setTimeout(function () {
            start += new Date().getTime()
            callback(start)
            finish += new Date().getTime()
            self.timeout = 1000 / 60 - (finish - start)
          }, self.timeout)
        }
    })()
    var that = this
    let canvas = this.$refs.canvas
    if (window.devicePixelRatio) {
      let width = canvas.width
      let height = canvas.height
      canvas.style.width = width + "px"
      canvas.style.height = height + "px"
      canvas.height = height * window.devicePixelRatio
      canvas.width = width * window.devicePixelRatio
      this.context = this.$refs.canvas.getContext('2d')
      this.context.scale(window.devicePixelRatio, window.devicePixelRatio)
    } else {
      this.context = this.$refs.canvas.getContext('2d')
    }
    that.$nextTick(function () {
      window.requestNextAnimationFrame(that.animate)
    })
  },
  methods: {
    createPoints: function (start, step, loops, offset = 0) {
      let re = []
      while (loops > 0) {
        re.push({
          x: start.x,
          y: start.y + step * offset
        })
        loops --
        start.x += step
      }
      return re;
    },
    draw: function (startPoints, options, step, loops) {
      let endPoints = this.createPoints({x: startPoints.x + step, y: startPoints.y}, step, loops)
      let controlUpPoints = this.createPoints({x: startPoints.x + step / 2, y: startPoints.y}, step, loops, this.useConfigData.upOffset)
      let controlDownPoints = this.createPoints({x: startPoints.x + step / 2, y: startPoints.y}, step, loops, -this.useConfigData.downOffset)
      this.context.save()
      this.context.beginPath()
      this.context.moveTo(startPoints.x, startPoints.y)
      for (let i = 0, lenI = endPoints.length; i < lenI; i++) {
        this.context.bezierCurveTo(controlUpPoints[i].x, controlUpPoints[i].y, controlDownPoints[i].x, controlDownPoints[i].y, endPoints[i].x, endPoints[i].y)
      }
      this.context.lineTo(endPoints[endPoints.length - 1].x, this.context.canvas.offsetHeight)
      this.context.lineTo(startPoints.x, this.context.canvas.offsetHeight)
      this.context.lineTo(startPoints.x, startPoints.y)
      this.context.fillStyle = options.color
      this.context.strokeStyle = options.color
      this.context.fill()
      this.context.stroke()
      this.context.restore()
    },
    animate: function () {
      if (!this.useConfigData.gradientColor) {
        let temGradient = this.context.createLinearGradient(0, this.useConfigData.width, 0, this.useConfigData.width * (1 - this.useConfigData.levelHeight - this.useConfigData.downOffset))
        temGradient.addColorStop(0, this.useConfigData.canvasOutColorStart)
        temGradient.addColorStop(1, this.useConfigData.canvasOutColorEnd)
        this.useConfigData.gradientColor = temGradient
      }
      this.context.clearRect(0, 0, this.canvasBoxSize.width * this.loops, this.canvasBoxSize.height)
      this.draw({x: 0 - this.animateFlag.x, y:this.animateFlag.y}, {color: this.useConfigData.canvasInColor}, this.canvasBoxSize.width, this.loops)
      this.draw({x: this.canvasBoxSize.width / 2 - this.animateFlag.x, y:this.animateFlag.y}, {color: this.useConfigData.gradientColor}, this.canvasBoxSize.width, this.loops)
      this.animateFlag.x += this.useConfigData.horizontalVelocity
      if (this.animateFlag.x > this.canvasBoxSize.width * 2) {
        this.animateFlag.x = 0
      }
      if (this.animateFlag.y > this.canvasBoxSize.height * (1 - this.useConfigData.levelHeight)) {
        this.animateFlag.y -= this.useConfigData.verticalVelocity
      }
      window.requestNextAnimationFrame(this.animate)
    }
  }
}
</script>

<style scoped>
  .border{
    box-sizing: border-box;
    border-radius: 50%;
  }
  .content{
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    background: darkgray;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    left: 1px;
    top: 1px;
  }
  .canvas{
    position: absolute;
  }
</style>
