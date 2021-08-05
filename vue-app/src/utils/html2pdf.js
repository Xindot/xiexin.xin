// 导出页面为PDF格式
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export default {
  install(Vue) {
    Vue.prototype.ExportSavePdf = function(htmlTitle, currentTime) {
      var element = document.getElementById("pdfCentent")

      var width = element.offsetWidth;
      var height = element.offsetHeight;
      var canvas = document.createElement("canvas");
      var scale = 2;

      canvas.width = width * scale;
      canvas.height = height * scale;
      var content = canvas.getContext("2d");
      content.scale(scale, scale);

      var rect = element.getBoundingClientRect(); //获取元素相对于视察的偏移量
      // console.log('rect=>', rect)
      content.translate(-rect.left, -rect.top - 0); //设置context位置，值为相对于视窗的偏移量负值，让图片复位

      var options = {
        logging: false,
        useCORS: true,
        scale: scale,
        canvas: canvas,
        width: width,
        height: height,
        dpi: window.devicePixelRatio * 2
      }
      html2canvas(element, options).then(function(canvas) {
        // console.log('canvas=>', canvas)
        var pdf = new jsPDF("p", "mm", "a4") // A4纸，纵向
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

        // var contentWidth = canvas.width;
        // var contentHeight = canvas.height;
        // //一页pdf显示html页面生成的canvas高度;
        // var pageHeight = contentWidth / 592.28 * 841.89;
        // //未生成pdf的html页面高度
        // var leftHeight = contentHeight;
        // //页面偏移
        // var position = 0;
        // //a4纸的尺寸[595.28,595.28]，html页面生成的canvas在pdf中图片的宽高
        // var imgWidth = 595.28;
        // var imgHeight = 592.28 / contentWidth * contentHeight;
        // var pageData = canvas.toDataURL('image/jpeg', 1.0);
        // //element.append(canvas)
        // var pdf = new jsPDF('', 'pt', 'a4');
        // //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
        // //当内容未超过pdf一页显示的范围，无需分页
        // if (leftHeight < pageHeight) {
        //   pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
        // } else { // 分页
        //   while (leftHeight > 0) {
        //     pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
        //     leftHeight -= pageHeight;
        //     position -= 841.89;
        //     //避免添加空白页
        //     if (leftHeight > 0) {
        //       pdf.addPage();
        //     }
        //   }
        // }
        // pdf.save(htmlTitle + currentTime + '.pdf');
      })

    }
  }
}

// vue项目中 页面生成pdf并下载，vue 中页面转PDF
// https://blog.csdn.net/csl125/article/details/94172038

// 偏移量
// 用html2canvas和jspdf实现将html转成pdf下载到本地 
// https://blog.csdn.net/nicexibeidage/article/details/84971996

// html2pdf网站
// https://www.html2pdf.solutions/en/how-to-usequick-start/parameters_for_html2pdf.htm