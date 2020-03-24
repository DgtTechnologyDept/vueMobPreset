import XLSX from 'xlsx'

/**
 * 读取Excel文件，返回行数据
 * @param {文件对象} file 
 * @param {开始读取的行数} rowNum 
 */
export function readExcel(file, rowNum) {
  return new Promise((resolve, reject) => {
    const realRowNum = parseInt(rowNum) || 0
    if (!file) {
      return reject(new Error('文件不存在'))
    } else if (!/\.(xls|xlsx)$/.test(file.name.toLowerCase())) {
      return reject(new Error('上传格式不正确，请上传xls或xlsx格式'))
    }
    const fileReader = new FileReader()
    fileReader.onload = ev => {
      try {
        const data = ev.target.result
        const workbook = XLSX.read(data, {
          type: "binary"
        })
        const wsname = workbook.SheetNames[0] //取第一张表
        const readRange = workbook.Sheets[wsname]['!ref'].split(':')
        workbook.Sheets[wsname]['!ref'] = 'A2:' + readRange[realRowNum]
        const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]) //生成json表格内容
        resolve(ws)
      } catch (e) {
        reject(e)
      }
    }
    fileReader.readAsBinaryString(file.raw)
  })
}