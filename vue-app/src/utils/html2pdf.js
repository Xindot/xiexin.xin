// 导出页面为PDF格式
import html2canvas from "html2canvas"
import JSPDF from "jspdf"

export default {
  install(Vue) {
    Vue.prototype.ExportSavePdf = function (htmlTitle, currentTime) {
      var element = document.getElementById("pdfCentent")

      var width = element.offsetWidth;
      var height = element.offsetHeight;
      var canvas = document.createElement("canvas");
      var scale = 2;

      canvas.width = width * scale;
      canvas.height = height * scale;
      var content = canvas.getContext("2d");
      content.scale(scale, scale);


      var options = {
        logging: false,
        useCORS: true,
        // scale: scale,
        // canvas: canvas,
        // width: width,
        // height: height,
      }
      html2canvas(element, options).then(function (canvas) {
        // console.log('canvas=>', canvas)
        var pdf = new JSPDF("p", "mm", "a4") // A4纸，纵向
        var ctx = canvas.getContext("2d")
        var a4w = 190;
        var a4h = 277 // A4大小，210mm x 297mm，四边各保留10mm的边距，显示区域190x277
        var imgHeight = Math.floor(a4h * canvas.width / a4w) // 按A4显示比例换算一页图像的像素高度
        var renderedHeight = 0

        while (renderedHeight < canvas.height) {
          var canvas2 = document.createElement("canvas")
          canvas2.width = canvas.width
          canvas2.height = Math.min(imgHeight, canvas.height - renderedHeight) // 可能内容不足一页

          var content2 = canvas2.getContext("2d")
          // 用getImageData剪裁指定区域，并画到前面创建的canvas对象中
          content2.putImageData(ctx.getImageData(0, renderedHeight, canvas2.width, canvas2.height), 0, 0)

          var Mm = Math.min(a4h, a4w * canvas2.height / canvas2.width)
          var imageData = canvas2.toDataURL("image/jpeg", 1.0)
          pdf.addImage(imageData, "JPEG", 10, 10, a4w, Mm) // 添加图像到页面，保留10mm边距

          renderedHeight += imgHeight
          if (renderedHeight < canvas.height) {
            pdf.addPage()
          } // 如果后面还有内容，添加一个空页
          // delete page;
        }
        pdf.save(htmlTitle + currentTime)
      })

    }
  }
}

// vue项目中 页面生成pdf并下载，vue 中页面转PDF
// https://blog.csdn.net/csl125/article/details/94172038